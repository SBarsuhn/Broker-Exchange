const router = require('express').Router();
const User = require('../models/user');
const checkLogin = require('../utils/auth')

router.get('/post', checkLogin, async (req, res) => {
    res.render('post')
})


module.exports = router;