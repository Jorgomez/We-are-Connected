import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Message = ({ item, userId }) => {
  const isCurrentUser = item.userId === userId
  return (
    <View
      style={[
        styles.messageContainer,
        isCurrentUser ? styles.currentUserMessage : styles.otherUserMessage
      ]}
    >
      <View style={styles.messageHeader}>
        <Text style={styles.messageUser}>
          {isCurrentUser ? 'You' : item.user}
        </Text>
        <Text style={styles.messageTimestamp}>
          {new Date(item.timestamp).toLocaleTimeString()}
        </Text>
      </View>
      <Text style={styles.messageText}>{item.message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  messageContainer: {
    minWidth: '50%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3
  },
  currentUserMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6'
  },
  otherUserMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f0f0'
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  messageUser: {
    fontWeight: 'bold'
  },
  messageTimestamp: {
    fontSize: 10,
    color: '#555'
  },
  messageText: {
    marginTop: 5
  }
})

export default Message
