//renders the login page - post for logging in and creating users is under api/users
const router = require('express').Router();
const { User } = require('../models')

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
        const userData = await User.findOne({
            where: { id: req.session.user_id },
            attributes: { exclude: ['password']}
        })
        req.session.save(() => {
            req.session.postpost = false;
        });
        res.render('login', {
            username: userData.username,
            loggedIn: req.session.loggedIn,
            postpost: req.session.postpost,
        });
        req.session.save(() => {
            req.session.postpost = false;
        });
        } else {
            req.session.save(() => {
                req.session.postpost = false;
            });
            res.render('login', {
                loggedIn: req.session.loggedIn,
                postpost: req.session.postpost,
            });
            req.session.save(() => {
                req.session.postpost = false;
            });
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;