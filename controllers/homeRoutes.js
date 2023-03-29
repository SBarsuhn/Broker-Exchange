const router = require("express").Router();
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

module.exports = router;
