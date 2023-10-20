const router = require('express').Router();

router.post('/', (req, res) => {
    req.session.destroy(() => {
        res.status(204).redirect('/');
    });
});

module.exports = router;