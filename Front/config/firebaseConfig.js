import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDoHCPfiG4l6FdA6aXutYm0ofKz_z5x7cw',
  authDomain: 'chatweareconnected.firebaseapp.com',
  databaseURL:
    'https://chatweareconnected-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chatweareconnected',
  storageBucket: 'chatweareconnected.firebasestorage.app',
  messagingSenderId: '223279015620',
  appId: '1:223279015620:web:706bdae0bed0112fb50b91'
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export { app, database }
