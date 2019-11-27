const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GooglePassport = require('../config/google-passport');
const FacebookPassport = require('../config/facebook-passport');
const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    const user = await User.findOne({ email: email });
    if (!user) {
        return done(null, false, { message: 'El usuario no existe' });
    } else {
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Contraseña incorrecta' });
        }
    }
}));

passport.use(GooglePassport);
passport.use(FacebookPassport);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});