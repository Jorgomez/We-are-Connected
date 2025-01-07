import { useEffect, useState, useRef } from 'react'
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
// import {
//   connectSocket,
//   disconnectSocket,
//   sendMessageToSocket,
//   saveMessageToFirebase,
//   fetchMessagesFromFirebase
// } from '../redux/chatSlice'
import 'react-native-get-random-values'

import Message from '../components/Message'
import { scrollToEnd } from '../utils/scrollHelpers'
import { handleSendMessage } from '../utils/handlers/messageHandlers'
import {
  fetchMessagesFromFirebase,
  saveMessageToFirebase
} from '../redux/chatThunks'
import {
  connectSocket,
  disconnectSocket,
  sendMessageToSocket
} from '../redux/chatSocketActions'

export function Chat() {
  const dispatch = useDispatch()
  const { messages, loading, userName, userId } = useSelector(
    (state) => state.chat
  )
  const [message, setMessage] = useState('') //-->Estado local para setear  el mensaje que se envia
  const insets = useSafeAreaInsets()
  const flatListRef = useRef(null)

  useEffect(() => {
    dispatch(fetchMessagesFromFirebase())
    dispatch(connectSocket())
    return () => {
      dispatch(disconnectSocket())
    }
  }, [])

  const renderItem = ({ item }) => <Message item={item} userId={userId} />

  return (
    <View style={[{ paddingBottom: insets.bottom }, styles.chatContainer]}>
      <Text style={styles.title}>We Are Connected</Text>

      <View style={styles.chatBox}>
        {loading && <ActivityIndicator size='large' color='#0000ff' />}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ flexGrow: 1 }}
          onContentSizeChange={() => scrollToEnd(flatListRef)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Write a message...'
          value={message}
          onChangeText={setMessage}
          placeholderTextColor='#aaa'
        />
        <Pressable
          style={styles.sendButton}
          onPress={() =>
            handleSendMessage(
              message,
              userName,
              userId,
              flatListRef,
              dispatch,
              sendMessageToSocket,
              saveMessageToFirebase,
              setMessage
            )
          }
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center'
  },
  chatBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginRight: 10
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
