import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HelloWorld from './root/1_Hello_World';
import ImageScreen from './root/2_Image';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Hello World!")}>
        <Text style={styles.text}>View, Text, StyleSheet (Hello World! 출력하기)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Image")}>
        <Text style={styles.text}>Image (이미지 출력하기)</Text>
      </TouchableOpacity>

    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="React Native Example Source Code">
        <Stack.Screen name="React Native Example Source Code" component={Home} />
        <Stack.Screen name="Hello World!" component={HelloWorld} />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  touchableContainer: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: '100%',
    padding: 15,
  },
  text: {
    fontSize: 20,
  }
})

export default App;