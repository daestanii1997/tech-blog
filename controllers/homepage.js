const router = require('express').Router();
const { User, Comment, Post } = require('../models');

// function to confirm user is logged in, if not reroutes to the homepage
const withAuth = (req, res, next) => {
    if(!req.session.logged_in) {
        res.render('homepage')
    } else {
        next();
    }
};

// homepage get route
// TODO: need to test
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User, 
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// login page get route
router.get('/login', async (req, res) => {
    // if user is logged in, redirects to blogpost page
    if (req.session.logged_in) {
        res.redirect('/blogpost');
        return;
      }
    res.render('login')
})

// get route for blogpost page
// TODO: need to render posts by current user
router.get('/blogpost', async (req, res) => {
    res.render('blogpost');
})

// catch all route
router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;