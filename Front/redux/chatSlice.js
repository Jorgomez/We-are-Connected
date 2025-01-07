// /redux/chatSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isConnected: false,
  messages: [],
  userName: '',
  userId: '',
  error: null,
  loading: false
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setIsConnected: (state, action) => {
      state.isConnected = action.payload
    },
    setMessages: (state, action) => {
      state.messages = action.payload
    },
    addMessage: (state, action) => {
      if (!state.messages.find((msg) => msg.id === action.payload.id)) {
        state.messages.push(action.payload)
      }
    },
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const {
  setIsConnected,
  setMessages,
  addMessage,
  setUserName,
  setUserId,
  setLoading,
  setError
} = chatSlice.actions
export default chatSlice.reducer
