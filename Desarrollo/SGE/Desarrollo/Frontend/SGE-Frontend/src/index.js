const express = require('express');
const engine = require('ejs-mate'); //Para motor de plantillas en vez de HTML duro
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const morgan = require('morgan');
const index = require('./routes/index.js');
const user = require('./routes/user.js');
const event = require('./routes/event.js');
const auth = require('./routes/auth.js');
const session = require('express-session');
const passport = require('passport');
const passportSetup = require('./config/passport');
const flash = require('connect-flash');
const keys = require('./config/keys');
const db = require('./db/connection.js');

//db connection
db.connection;

//initializations
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//settings
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('view engine', 'ejs');//todas las vistas tendra terminacion .ejs eso indica
app.set('json spaces', 2);

app.set('views', path.join(__dirname, 'views')); //Como no encuentra la ruta la vamos a setear con la direccion global

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash());

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

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.user = req.user || null;
    next();
});

// routes
app.use(index); // buscar el archivo index dentro de esa carpeta
app.use(user);
app.use(event);
app.use(auth);

//sockets
require('./sockets')(io);

// static files
app.use(express.static(path.join(__dirname, 'public'))); //Como no encuentra la ruta la vamos a setear con la direccion global


//starting the server
server.listen(3000, () => {
    console.log('Server on port ', app.get('port'));
})