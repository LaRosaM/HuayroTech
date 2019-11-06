module.exports = io => {
    io.on('connection', (socket) => {
        console.log('New User connected');

        socket.on('userCoordinates', coords => {
            console.log(coords); //En este punto ya se podria almacenar en una bd
            /* Ahora voy a reenviarlo para que lo pinte en los demas usuarios */

            socket.broadcast.emit('newUserCoordinates', coords); // De esta manera enviamos al resto de usuarios
        });
        socket.on('myCoordinates', coords => {
            console.log(coords); //En este punto ya se podria almacenar en una bd
            /* Ahora voy a reenviarlo para que lo pinte en los demas usuarios */
            socket.emit('newMyCoordinates', coords); // De esta manera enviamos al resto de usuarios
});
    })
}