const router = require('express').Router();
const { User, Post } = require('../models');
const checkLogin = require('../utils/auth')


router.get('/', checkLogin, async (req, res) => {
  const loggedUser = await User.findOne({
    where: { id: req.session.user_id },
    attributes: { exclude: ['password']}
})
try {
    const userData = await Post.findAll({
        where: { user_id: loggedUser.id },
        include: [
            {
                model: User,
                attributes: ['aliasName'],
            },
        ],
    });
    const posts = userData.map((post) =>
        post.get({ plain:true })
    );


    res.render('profile', {
      userData,
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});



module.exports = router;