const checkLogin = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/createUser')
    } else {
        next()
    }
}

module.exports = checkLogin;