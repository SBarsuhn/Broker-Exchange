//route for rendering the community/homepage and posting a thread(comment) on a post
const router = require("express").Router();
const getTime = require('../utils/time');
const { User, Post, Category, Thread } = require("../models");

const checkLogin = require("../utils/auth");

//renders homepage
router.get("/", checkLogin, async (req, res) => {
  const loggedUser = await User.findOne({
    where: { id: req.session.user_id },
    attributes: { exclude: ["password"] },
  });
  try {
    const communityData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["aliasName"],
        },
        {
          model: Thread,
          attributes: ["thread", "counter_offer", "user_id", "id"],
        },
        {
          model: Category,
          attributes: ["category"],
        },
      ],
    });
    const posts = communityData.map((post) => post.get({ plain: true }));

    const threadData = await Thread.findAll({
      // where: { post_id: communityData.id },
      include: [
        {
          model: User,
          attributes: ['aliasName'],
        },
        {
          model: Post,
          attributes: ["id"]
        }
      ],
    });
    const threads = threadData.map((thread) => 
      thread.get({ plain:true })
    )

    
    res.render("homepage", {
      posts,
      threads,
      threadID: threadData.post_id,
      postID: communityData.id,
      first_name: loggedUser.first_name,
      aliasName: loggedUser.aliasName,
      loggedIn: req.session.loggedIn,
      postpost: req.session.postpost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/updatePostID', async (req, res) => {

  try {
      req.session.save(() => {
        req.session.postIDHolder = req.body.post_id;
          res.status(200).json();
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err)
  }

});

//creates a new thread based on user input on homepage
router.post('/', async (req, res) => {
  try {
      const threadDB = await Thread.create({
          user_id: req.session.user_id,
          thread: req.body.thread,
          post_id: req.session.postIDHolder,
          post_date: getTime,
          counter_offer: req.body.counter_offer,
      });
      req.session.save(() => {
        req.session.postpost = true;
          res.status(200).json(threadDB);
          req.session.postpost = false;
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err)
  }

});

module.exports = router;
