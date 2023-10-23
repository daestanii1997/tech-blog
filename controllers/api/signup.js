const router = require('express').Router();
const { User } = require('../../models');

// New User post route
// This route works! :)
router.post('/', async (req, res) => {

    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        const currentUser = await userData.get({ plain: true });
        req.session.save(() => {
            req.session.logged_in = true
            req.session.user_id = currentUser.id
            req.session.username = req.body.username

            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;