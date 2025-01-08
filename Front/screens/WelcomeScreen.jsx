import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { setUserName, setUserId } from '../redux/chatSlice'
import { v4 as uuidv4 } from 'uuid'

export function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('')
  const [showWarning, setShowWarning] = useState(false)
  const dispatch = useDispatch()

  const handleStartChat = () => {
    if (name.trim()) {
      const userId = uuidv4()
      dispatch(setUserName(name))
      dispatch(setUserId(userId))
      setName('')
      setShowWarning(false)
      navigation.navigate('Chat')
    } else {
      setShowWarning(true)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We Are Connected</Text>
      <Text style={styles.subtitle}>
        Welcome to We Are Connected. To start chatting, please enter your name.
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Enter your name'
        value={name}
        onChangeText={(text) => {
          setName(text)
          if (text.trim()) {
            setShowWarning(false)
          }
        }}
        placeholderTextColor='#aaa'
      />
      {showWarning && (
        <Text style={styles.warningText}>Please enter your name</Text>
      )}
      <Pressable style={styles.button} onPress={handleStartChat}>
        <Text style={styles.buttonText}>Start Chat</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
    textAlign: 'center'
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#333'
  },
  warningText: {
    color: 'red',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
