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
            logged_in: req.session.logged_in,
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

// get route for dashboard page
// TODO: need to render posts by current user
router.get('/blogpost', withAuth, async (req, res) => {

    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User, 
                    attributes: ['username'],
                },
            ],
            where: {
                user_id: req.session.user_id
            }
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            logged_in: req.session.logged_in,
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const post = postData.get({plain: true});

        res.render('post_detail', {
            ...post,
            logged_in: req.session.logged_in
        });
        
    } catch (err) {
        res.status(500).json(err)
    }
});

// catch all route
router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;