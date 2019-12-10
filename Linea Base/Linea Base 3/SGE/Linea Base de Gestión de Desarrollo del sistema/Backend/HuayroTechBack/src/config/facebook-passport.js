const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const User = require('../models/user');

const FacebookPassport = new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: '/auth/facebook/redirect'
},
    function (token, tokenSecret, profile, done) {
        User.findOne({ facebookId: profile.id }, async function (err, user) {
            if (err)
                return done(err);

            if (user) {

                // if a user is found, log them in
                console.log(profile);
                return done(null, user);
            } else {
                // if the user isnt in our database, create a new user
                const newUser = new User();

                // set all of the relevant information
                //newUser.google.id = profile.id;
                //newUser.google.token = token;
                newUser.facebookId = profile.id
                newUser.firstName = profile.displayName.split(' ')[0];
                newUser.lastName = profile.displayName.split(' ')[1];
                //newUser.email = profile._json.email;

                // save the user
                await newUser.save();
                done(null, newUser);
            }
        });
    }
)

module.exports = FacebookPassport;