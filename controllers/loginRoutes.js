const router = require('express').Router();
const { User } = require('../models')

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
        const userData = await User.findOne({
            where: { id: req.session.user_id },
            attributes: { exclude: ['password']}
        })
        res.render('login', {
            username: userData.username,
            loggedIn: req.session.loggedIn,
        });
        } else {
            res.render('login', {
                loggedIn: req.session.loggedIn,
            });
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;