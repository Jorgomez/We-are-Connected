import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Chat } from './screens/Chat'
import { WelcomeScreen } from './screens/WelcomeScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='Chat' component={Chat} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  }
})
