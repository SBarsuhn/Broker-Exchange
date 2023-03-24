const router = require('express').Router();
const User = require('../models/user');
const checkLogin = require('../utils/auth')

router.get('/', checkLogin, async (req, res) => {
    res.render('post')
})


module.exports = router;