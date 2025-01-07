export const scrollToEnd = (flatListRef) => {
  if (flatListRef.current) {
    flatListRef.current.scrollToEnd({ animated: true })
  }
}
