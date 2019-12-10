import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

const socketIO = require('socket.io');
const http = require('http');


// initializing packages
const app = express();
const path = require('path');
const server = http.createServer(app);
const io = socketIO(server);
const methodOverride = require('method-override');
const session = require('express-session');

//DB initialization
require('./database');

//sockets
require('./sockets')(io);

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'mysecretkey',
  resave: true,
  saveUninitialized: true
}));

// static files
app.use(express.static(path.join(__dirname, 'public'))); //Como no encuentra la ruta la vamos a setear con la direccion global

// routes
app.use(require('./routers/'));
app.use(require('./routers/evento'));
app.use(require('./routers/user'));

// starting the server
server.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
