const router = require('express').Router();
const { User, Post } = require('../models');
const checkLogin = require('../utils/auth')


router.get('/', checkLogin, async (req, res) => {
  const loggedUser = await User.findOne({
    where: { id: req.session.user_id },
    attributes: { exclude: ['password']}
})
try {
//   const userInfo = await User.findOne({
//     where: { id: loggedUser.id },
 
// });
// const user = userInfo.get({ plain:true });

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
      // user,
      postData,
      posts,
      aliasName: loggedUser.aliasName,
      email: loggedUser.email,
      // aliasName: user.aliasName,
      // email: user.email,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});



module.exports = router;