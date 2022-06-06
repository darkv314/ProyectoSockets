const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
    socket.on('data', (data) => {
        console.log("Mensaje recibido desde el cliente: " + data)
        socket.write('Recibido')
    })

    socket.on('close', () => {
        console.log("Comunicacion finalizada")
    })

    socket.on('error', (err) => {
        console.log(err.message)
    })
})

server.listen(4000, () => {
    console.log("El servidor esta escuchando en la puerta", server.address().port)
})