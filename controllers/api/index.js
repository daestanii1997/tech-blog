const router = require('express').Router();
const userRoutes = require('./user');
const loginRoutes = require('./login');
const signupRoutes = require('./signup');
const blogpostRoutes = require('./blogpost');
const logoutRoutes = require('./logout');

router.use('/user', userRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/logout', logoutRoutes);

module.exports = router;