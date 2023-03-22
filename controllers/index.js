const router = require('express').Router();
const apiRoutes = require('./api')
const createUserRoutes = require('./createUserRoutes')
// const homeRoutes = require('./homeRoutes')
const communityRoutes = require('./communityRoutes')

router.use('/', createUserRoutes);
router.use('/api', apiRoutes);
// router.use('/home', homeRoutes);
// router.use('/community', communityRoutes)

module.exports = router;