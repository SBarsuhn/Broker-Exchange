//create user, login, and logout routes
const router = require("express").Router();
const { User } = require("../../models");

// route for creating a new user login

router.post('/', async (req, res) => {
    try {
        const userDB = await User.create({
            aliasName: req.body.username,
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.firstName,
            last_name: req.body.lastName,
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
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const validUser = await User.findOne({
      where: {
        aliasName: req.body.username,
      },
    });

        if (!validUser) {
            res.status(400).json({message: 'Incorrect username'});
            return;
        }


        const validPass = await validUser.checkPassword(req.body.password);
        if (!validPass) {
            res.status(400).json({message: 'Incorrect password'});
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
router.post("/logout", async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
