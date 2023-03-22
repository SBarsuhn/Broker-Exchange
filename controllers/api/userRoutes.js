const router = require('express').Router();
const User  = require('../../models/user');

// route for creating a new user login
router.post('/', async (req, res) => {
    try {
        const userDB = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = userDB.id;
            req.session.loggedIn = true;
            res.status(200).json(userDB);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//route for logging in with an existing user
router.post('/login', async (req, res) => {
    try {
        const validUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!validUser) {
            res.status(400).json({message: 'Incorrect email or password.'});
            return;
        }

        const validPass = await validUser.checkPassword(req.body.password);
        if (!validPass) {
            res.status(400).json({message: 'Incorrect email or password.'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = validUser.id;
            req.session.loggedIn = true;
            res.status(200).json({ user: validUser, message: 'You are logged in.'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//logout route
router.post('/logout', async (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        });
    } else {
        res.status(404).end()
    }
})

module.exports = router;