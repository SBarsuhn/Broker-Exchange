const router = require('express').Router();
const User = require('../models/user');
const Post = require('../models/post');
const Thread = require('../models/thread');
const checkLogin = require('../utils/auth');

// router.get('/', checkLogin, async (req, res) => {
router.get('/', async (req, res) => {
    if (req.session.loggedIn) {
        const loggedUser = await User.findOne({
            where: {id: req.session.user_id},
            attributes: {exclude: ['password']}
        })
        try {
            const communityData = await Post.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['aliasName']
                    },
                    {
                        model: Thread,
                        attributes: ['thread', 'counter_offer', 'user_id']
                    }
                ]
            });
            const posts = communityData.map((post) =>
                post.get({ plain:true })
            );
            res.render('homepage', {
                posts,
                aliasName: loggedUser.aliasName,
                loggedIn: req.session.loggedIn,
            })
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else {
        try {
            const communityData = await Post.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['aliasName']
                    },
                    {
                        model: Thread,
                        attributes: ['thread', 'thread_offer', 'user_id']
                    }
                ]
            });
            const posts = communityData.map((post) =>
                post.get({ plain:true })
            );
            res.render('homepage', {
                posts,
                // loggedIn: req.session.loggedIn,
            })
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    
})


module.exports = router;