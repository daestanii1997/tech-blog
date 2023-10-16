const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ 
            where: {
                username: req.body.username
            },
        });
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username!' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = userData.id;
            req.session.username = req.body.username
            res.json({ user: userData, message: 'Login successful!'});
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;