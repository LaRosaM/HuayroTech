const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys');
const User = require('../models/user');

const GooglePassport = new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: '/auth/google/redirect'
},
    function (token, tokenSecret, profile, done) {
        User.findOne({ googleId: profile.id }, async function (err, user) {
            if (err)
                return done(err);
            if (user) {
                // if a user is found, log them in
                return done(null, user);
            } else {
                // if the user isnt in our database, create a new user
                const newUser = new User();

                // set all of the relevant information
                newUser.googleId = profile.id
                newUser.firstName = profile.name.givenName;
                newUser.lastName = profile.name.familyName;
                newUser.email = profile.emails[0].value;

                // save the user
                await newUser.save();
                done(null, newUser);
            }
        });
    }
)

module.exports = GooglePassport;