const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const API = require('../API/API.js');

//return user data to the client
router.get('/auth/check', (req, res) => {
    if (req.user === undefined) {
        res.json({});
    } else {
        res.json({
            user: req.user
        });
    }
});

//sign in with google
router.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}));

//redirect url
router.get('/auth/google/redirect', passport.authenticate('google'),
    (req, res) => {
        const url = `${API.API.url}/loading`;
        res.redirect(url);
    });

// The API to log out, it clears req.user
router.get('/logout', function (req, res, next) {
    req.logout();
    res.json({ msg: "Sesión finalizada" });
});

/**************************************************************************************************/

router.get('/auth/facebook', passport.authenticate('facebook'));

//redirect url
router.get('/auth/facebook/redirect', passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        const url = `${API.API.url}/loading`;
        res.redirect(url);
    });

module.exports = router;