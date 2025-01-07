const http = require('http')
const server = http.createServer()

const io = require('socket.io')(server, {
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log(`A client has connected: ${socket.id}`)

  // socket.broadcast.emit('chat_message', {
  //   user: socket.id,
  //   message: 'connected'
  // })

  socket.on('chat_message', (data) => {
    console.log(data)
    io.emit('chat_message', data)
  })
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`)
  })
  socket.on('error', (err) => {
    console.error('Socket error:', err)
  })
})

server.listen(3000, () => {
  console.log('Server listening at http://localhost:3000')
})
