import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './app/navigation/Navigation';
import FadeScreen from './app/screens/FadeScreen';
export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
      {/* <FadeScreen/>  */}  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
