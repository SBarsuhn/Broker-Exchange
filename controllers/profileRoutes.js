const router = require('express').Router();
const { User } = require('../models');
const checkLogin = require('../utils/auth')


router.get("/profile", checkLogin, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    const postData = await Post.findAll({ where: { user_id: user_id } });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("profile", {
      ...user,
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});



module.exports = router;