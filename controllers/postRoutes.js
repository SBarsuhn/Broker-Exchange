//routes for the dedicated screen for creating new posts
const router = require('express').Router();
const { User, Post } = require('../models');
const getTime = require('../utils/time');
const checkLogin = require('../utils/auth')

//renders the post page
router.get('/', checkLogin, async (req, res) => {
    const loggedUser = await User.findOne({
        where: {id: req.session.user_id},
        attributes: {exclude: ['password']}
    });
    try {
        req.session.save(() => {
            req.session.postpost = false;
        });
        res.render('post', {
            aliasName: loggedUser.aliasName,
            loggedIn: req.session.loggedIn,
            postpost: req.session.postpost,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

//takes field input to create a new post - automatically timestamps dayjs helper in utils
router.post('/', async (req, res) => {
    try {
        const postDB = await Post.create({
            user_id: req.session.user_id,
            title: req.body.title,
            post: req.body.post,
            need: req.body.need,
            post_date: getTime,
            category_id: req.body.category,
            close_date: req.body.close_date,
            offer: req.body.offer,
        });
        req.session.save(() => {
            req.session.postpost = true;
            res.status(200).json(postDB);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;