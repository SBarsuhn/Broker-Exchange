const router = require('express').Router();
const User = require('../models/user');
const checkLogin = require('../utils/auth')

router.get('/profile', checkLogin, async (req, res) => {
    res.render('profile')
})


module.exports = router;