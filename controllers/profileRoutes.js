const router = require('express').Router();
const User = require('../models/user');
const checkLogin = require('../utils/auth')

router.get('/', async (req, res) => {
    res.render('login')
})


module.exports = router;