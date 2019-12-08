const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportSetup = require('./config/passport');
const cookieSession = require('cookie-session');
const cors = require('cors');
const path = require('path');
const keys = require('./config/keys');
const API = require('./API/API');

const app = express();
const db = require('./db/connection.js');
const user = require('./routes/user.js');
const event = require('./routes/event.js');
const auth = require('./routes/auth.js');

//db connection
db.connection;

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: API.API.url }));
/*app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
});*/

/*app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.SESSION.cookieKey]
}))*/

//session
app.use(session({
    secret: keys.SESSION.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000
    }
}));
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(user);
app.use(event);
app.use(auth);

app.listen(3000, () => {
    console.log('Running in port', app.get('port'));
});