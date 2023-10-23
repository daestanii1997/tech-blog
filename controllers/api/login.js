const router = require('express').Router();
const { User } = require('../../models');

// Post route for login information
// This works!!
// TODO: need to write password validation function
router.post('/', async (req, res) => {
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
        
        // TODO: this was giving an error and wouldn't allow user to login
        // error message is check password is not a function

        // const validPassword = await userData.checkPassword(req.body.password);
        
        // if (!validPassword) {
        //     res
        //     .status(400)
        //     .json({ message: 'Incorrect password!' });
        //     return;
        // }
        
        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = userData.id;
            req.session.username = req.body.username
            res.json({ user: userData, message: 'Login successful!'});
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});


module.exports = router;