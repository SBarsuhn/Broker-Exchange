const router = require('express').Router();
const User = require('../models/user');
const checkLogin = require('../utils/auth')

// router.get('/', checkLogin, async (req, res) => {
//     if (req.session.loggedIn) {
//         const loggedUser = 
//     } else {
//         res.render('createUser')
//     }

    
//     res.render('profile', {
//         username: loggedUser.username,
//         loggedIn: req.session.loggedIn,
//     })
// })


module.exports = router;