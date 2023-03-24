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

router.post('/login', async (req, res) => {
    try {



        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({ 
                name: varName, 
                description: varDescription,
                address: varAddress,
                time_frame: varTimeFrame,
                request: varRequest,
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;