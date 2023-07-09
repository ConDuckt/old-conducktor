const router = require("express").Router();
const { User } = require("../../models");


router.post("/", async (req, res) => {
    try {
        console.log(req.body)

        const userData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        console.log(userData)
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

        res.json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }

    // try {
    //     const dbUserData = await User.create({
    //         username: req.body.username,
    //         password: req.body.password,
    //     });

    //     req.session.user = {
    //         id: dbUserData.id,
    //         username: dbUserData.username,
    //     };

    //     // Create a "logged_in" session variable on user creation, sets it to true. (required for logout function)
    //     req.session.save(() => {
    //         req.session.logged_in = true;

    //         res.status(200).json(dbUserData);
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ 
            where: { 
                username: req.body.username,
            }
        });

        if (!user) {
            res.status(400).json({ message: "Incorrect username or password. Please try again!" });
            return;
        }

        const validPassword = user.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: "Incorrect username or password. Please try again!" });
            return;
        }

        req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;
      
            res.json({ user, message: 'You are now logged in!' });
        });
    
    } catch (err) {
        res.status(400).json({ message: 'Incorrect username or password. Please try again!' });
    }
});

router.post("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;