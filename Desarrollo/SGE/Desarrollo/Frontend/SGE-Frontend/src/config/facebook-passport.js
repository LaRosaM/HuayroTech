const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const User = require('../models/user');

const FacebookPassport = new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: '/auth/facebook/redirect',
    profileFields: ['name', 'birthday', 'emails', 'gender']
},
    function (token, tokenSecret, profile, done) {
        User.findOne({ facebookId: profile.id }, async function (err, user) {
            if (err)
                return done(err);
            if (user) {
                return done(null, user);
            } else {
                // if the user isnt in our database, create a new user
                const newUser = new User();

                // set all of the relevant information
                newUser.facebookId = profile.id
                newUser.firstName = profile.name.givenName
                newUser.lastName = profile.name.familyName;
                newUser.email = profile.emails[0].value;
                newUser.gender = (profile.gender === 'male' ? 'Masculino' : 'Femenino');
                const birthdayFormat = profile._json.birthday.split("/");
                newUser.birthday = birthdayFormat[2].concat("-", birthdayFormat[0], "-", birthdayFormat[1]);

                // save the user
                await newUser.save();
                done(null, newUser);
            }
        });
    }
)

module.exports = FacebookPassport;