const router = require('express').Router();
const User = require('../models/user');
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
    
})

module.exports = router;