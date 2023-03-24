const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./loginRoutes');
const postRoutes = require('./postRoutes');
const homeRoutes = require('./homeRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/', loginRoutes);
router.use('/api', apiRoutes);
router.use('/home', homeRoutes);
router.use('/post', postRoutes);
router.use('/profile', profileRoutes);

module.exports = router;