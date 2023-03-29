const router = require('express').Router();
const { User, Post } = require('../models');
const checkLogin = require('../utils/auth')


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

    res.render('profile', {
      postData,
      posts,
      aliasName: loggedUser.aliasName,
      email: loggedUser.email,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.delete('/', async (req, res) => {

  try {
  Post.destroy({
      where: { id: req.body.post_id}
  });
  res.status(200).json();
  } catch (err) {
      console.log(err);
      res.status(500).json(err)
  }
})

module.exports = router;