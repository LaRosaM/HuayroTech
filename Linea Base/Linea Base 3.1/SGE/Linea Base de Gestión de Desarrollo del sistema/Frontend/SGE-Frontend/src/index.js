const express = require('express');
const engine = require('ejs-mate'); //Para motor de plantillas en vez de HTML duro
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

//initializations
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

//settings
app.engine('ejs',engine);
app.set('view engine', 'ejs');//todas las vistas tendra terminacion .ejs eso indica
console.log(__dirname + '/views'); //tiene la ruta global de la carpeta en la computadora

app.set('views', path.join(__dirname, 'views') ); //Como no encuentra la ruta la vamos a setear con la direccion global

// routes
app.use(require('./routes/')); // buscar el archivo index dentro de esa carpeta

//sockets
require('./sockets')(io);

// static files
app.use(express.static(path.join(__dirname, 'public'))); //Como no encuentra la ruta la vamos a setear con la direccion global


//starting the server
server.listen(3000, ()=> {
    console.log('Server on port 3000');
})