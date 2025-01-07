import { ref, set, get, child } from 'firebase/database'
import { database } from '../config/firebaseConfig'

export const writeData = (userId, name, email) => {
  set(ref(database, 'users/' + userId), {
    username: name,
    email: email
  })
}

export const readData = async (userId) => {
  const dbRef = ref(database)
  try {
    const snapshot = await get(child(dbRef, `users/${userId}`))
    if (snapshot.exists()) {
      console.log(snapshot.val())
    } else {
      console.log('No data available')
    }
  } catch (error) {
    console.error(error)
  }
}
