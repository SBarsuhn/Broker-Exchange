const router = require('express').Router();
const { User, Post } = require('../models');
const getTime = require('../utils/time');
const checkLogin = require('../utils/auth')

router.get('/', checkLogin, async (req, res) => {
    const loggedUser = await User.findOne({
        where: {id: req.session.user_id},
        attributes: {exclude: ['password']}
    })
        res.render('post', {
            aliasName: loggedUser.aliasName,
            loggedIn: req.session.loggedIn,
        })
})

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
            res.status(200).json(postDB);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }

});

module.exports = router;