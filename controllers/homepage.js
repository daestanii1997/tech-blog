const router = require('express').Router();
const { User, Comment, Post } = require('../models');

const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.render('login')
    } else {
        next();
    }
};

router.get('/', withAuth, async (req, res) => {
    res.render('homepage');
});



router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;