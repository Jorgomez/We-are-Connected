import { v4 as uuidv4 } from 'uuid'
import { scrollToEnd } from '../scrollHelpers'

export const handleSendMessage = (
  message,
  userName,
  userId,
  flatListRef,
  dispatch,
  sendMessageToSocket,
  saveMessageToFirebase,
  setMessage
) => {
  if (message.trim()) {
    const messageData = {
      id: uuidv4(),
      user: userName,
      userId: userId,
      message,
      timestamp: Date.now()
    }

    dispatch(sendMessageToSocket(messageData))
    dispatch(saveMessageToFirebase(messageData))
    setMessage('')
    scrollToEnd(flatListRef)
  }
}
