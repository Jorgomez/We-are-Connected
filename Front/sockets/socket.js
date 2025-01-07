import io from 'socket.io-client'

const socket = io('http://192.168.1.93:3000', {
  autoConnect: false
})

export const connectSocket = (dispatch, setIsConnected, addMessage) => {
  socket.connect()

  socket.on('connect', () => {
    console.log('User connected:', socket.id)
    dispatch(setIsConnected(true))
  })

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id)
    dispatch(setIsConnected(false))
  })

  socket.on('chat_message', (data) => {
    dispatch(addMessage(data))
  })
}

export const sendMessage = (message) => {
  socket.emit('chat_message', message)
}
export const disconnectSocket = () => {
  socket.disconnect()
}
export default socket
