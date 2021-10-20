const socketio = require('socket.io')

const io = socketio()

io.on('connection' , (socket) => {
    console.log("online");

})

module.exports = io