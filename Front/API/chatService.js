import { ref, push, set, getDatabase, onValue } from 'firebase/database'
import { database } from '../config/firebaseConfig'

export const saveMessage = async (message) => {
  try {
    const newMessageRef = push(ref(database, 'messages'))
    await set(newMessageRef, message)
  } catch (error) {
    console.error('Error saving message to Firebase:', error)
    throw error
  }
}

export const fetchMessages = (callback, errorCallback) => {
  const db = getDatabase()
  const messagesRef = ref(db, 'messages')
  onValue(
    messagesRef,
    (snapshot) => {
      const data = snapshot.val()
      if (data) {
        callback(Object.values(data))
      } else {
        callback([])
      }
    },
    (error) => {
      errorCallback(error.message)
    }
  )
}
