import {
  connectSocket as connectSocketAction,
  sendMessage as sendMessageAction,
  disconnectSocket as disconnectSocketAction
} from '../sockets/socket'
import { setIsConnected, addMessage } from './chatSlice'

export const connectSocket = () => (dispatch) => {
  connectSocketAction(dispatch, setIsConnected, (message) => {
    dispatch(addMessage(message))
  })
}

export const disconnectSocket = () => (dispatch) => {
  disconnectSocketAction()
}

export const sendMessageToSocket = (message) => () => {
  sendMessageAction(message)
}
