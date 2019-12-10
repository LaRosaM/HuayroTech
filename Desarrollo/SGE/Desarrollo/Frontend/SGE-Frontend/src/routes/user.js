const router = require('express-promise-router')();

const user = require('../controllers/user');

const passport = require('passport');

const { isAuthenticated } = require('../helpers/auth');

/*GET user*/
router.get('/user/:userId', user.getUser);

/*GET users*/
router.get('/users', user.getUsers);

/* UPDATE one user */
router.put('/user/:userId', isAuthenticated, user.editUser);

/* DELETE one user */
router.delete('/user/:userId', user.deleteUser);

/* SIGNUP user */
router.post('/register', user.register);

router.get('/register', (req, res) => {
    res.render('register')
})

/* SIGNIN user */
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
}));

/* LOGOUT user */
router.get('/logout', user.logout);

module.exports = router;