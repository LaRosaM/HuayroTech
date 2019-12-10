const router = require('express-promise-router')();
const passport = require('passport');

/* //return user data to the client
router.get('/auth/check', (req, res) => {
    if (req.user === undefined) {
        res.json({});
    } else {
        res.json({
            user: req.user
        });
    }
}); */

//sign in with google
router.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}));

//redirect url
router.get('/auth/google/redirect', passport.authenticate('google'),
    (req, res) => {
        res.redirect('/');
    });

/**************************************************************************************************/

router.get('/auth/facebook', passport.authenticate('facebook'));

//redirect url
router.get('/auth/facebook/redirect', passport.authenticate('facebook'),
    (req, res) => {
        res.redirect('/');
    });

module.exports = router;