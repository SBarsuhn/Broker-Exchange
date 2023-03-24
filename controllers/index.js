const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./loginRoutes');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');
const profileRoutes = require('./profileRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/profile', profileRoutes);

module.exports = router;