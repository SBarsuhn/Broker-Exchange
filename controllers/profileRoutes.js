//route for rendering the logged in user profile page
const router = require('express').Router();
const { User, Post } = require('../models');
const checkLogin = require('../utils/auth')

//renders page that includes only the posts of the logged in user using information from the session id
router.get('/', checkLogin, async (req, res) => {
  const loggedUser = await User.findOne({
    where: { id: req.session.user_id },
    attributes: { exclude: ['password']}
})
try {
    const postData = await Post.findAll({
        where: { user_id: loggedUser.id },
        include: [
            {
                model: User,
                attributes: ['aliasName', 'email'],
            },
        ],
    });
    const posts = postData.map((post) =>
        post.get({ plain:true })
    );

    req.session.save(() => {
        req.session.postpost = false;
    });
    res.render('profile', {
      postData,
      posts,
      aliasName: loggedUser.aliasName,
      email: loggedUser.email,
      loggedIn: req.session.loggedIn,
      postpost: req.session.postpost,
    });
    req.session.save(() => {
        req.session.postpost = false;
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

//posts a user makes can be deleted from their profile page
router.delete('/', async (req, res) => {
  try {
  Post.destroy({
      where: { id: req.body.post_id}
  });
  res.status(200).json();
  } catch (err) {
      console.log(err);
      res.status(500).json(err)
  };

  req.session.save(() => {
    req.session.postpost = false;
});
})

module.exports = router;