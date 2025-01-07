import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './chatSlice'
import { thunk } from 'redux-thunk'

const store = configureStore({
  reducer: {
    chat: chatReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store
