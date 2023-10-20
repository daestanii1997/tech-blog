const router = require('express').Router();
const { User, Comment, Post } = require('../models');

const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.render('homepage')
    } else {
        next();
    }
};

router.get('/', withAuth, async (req, res) => {
    res.render('homepage');
    console.log('rendering homepage')
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/blogpost');
        return;
      }
    res.render('login')
    console.log('rendering login page')
})

router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;