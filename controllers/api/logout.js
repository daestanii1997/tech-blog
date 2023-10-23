const router = require('express').Router();

// post route for logout
// logout and redirect works!
router.post('/', (req, res) => {
    req.session.destroy(() => {
        res.status(204).redirect('/');
    });
});

module.exports = router;