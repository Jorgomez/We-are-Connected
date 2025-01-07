import { setLoading, setMessages, setError } from './chatSlice'
import { saveMessage, fetchMessages } from '../API/chatService'

export const saveMessageToFirebase = (message) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    await saveMessage(message)
  } catch (error) {
    dispatch(setError(error.message))
  } finally {
    dispatch(setLoading(false))
  }
}

export const fetchMessagesFromFirebase = () => (dispatch) => {
  dispatch(setLoading(true))
  fetchMessages(
    (messages) => {
      dispatch(setMessages(messages))
      dispatch(setLoading(false))
    },
    (errorMessage) => {
      dispatch(setError(errorMessage))
      dispatch(setLoading(false))
    }
  )
}
