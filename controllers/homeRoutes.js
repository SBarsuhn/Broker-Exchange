const router = require("express").Router();
const getTime = require('../utils/time');
const { User, Post, Category, Thread } = require("../models");

const checkLogin = require("../utils/auth");

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
          attributes: ["thread", "counter_offer", "user_id"],
        },
        {
          model: Category,
          attributes: ["category"],
        },
      ],
    });
    const posts = communityData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      aliasName: loggedUser.aliasName,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
      const threadDB = await Thread.create({
          user_id: req.session.user_id,
          thread: req.body.thread,
          post_id: req.body.post_id,
          post_date: getTime,
          counter_offer: req.body.counter_offer,
      });
      req.session.save(() => {
          res.status(200).json(threadDB);
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err)
  }

});

module.exports = router;
