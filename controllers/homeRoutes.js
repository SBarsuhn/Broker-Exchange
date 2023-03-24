const router = require('express').Router();
const User = require('../models/user');
const checkLogin = require('../utils/auth')

router.get('/home', checkLogin, async (req, res) => {
    res.render('home')
})


module.exports = router;