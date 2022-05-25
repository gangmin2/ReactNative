import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SectionLine from './root/util/section'

import HelloWorld from './root/1_Hello_World';
import ImageScreen from './root/2_Image';
import KakaoProfile from './root/3_Kakao_Profile';
import KakaoChat from './root/4_Kakao_ChatList';
import KakaoTab from './root/5_Kakao_Tab';
import Loading from './root/6_Loading';
import Layout from './root/7_Layout';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Hello World!")}>
        <Text style={styles.text}>View, Text, StyleSheet (Hello World! 출력하기)</Text>
      </TouchableOpacity>

      <SectionLine/>
      
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Image")}>
        <Text style={styles.text}>Image (이미지 출력하기)</Text>
      </TouchableOpacity>

      <SectionLine/>

      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("KakaoProfile")}>
        <Text style={styles.text}>카카오톡 프로필 따라해보기</Text>
      </TouchableOpacity>

      <SectionLine/>

      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("KakaoChat")}>
        <Text style={styles.text}>카카오톡 채팅방 리스트 따라해보기</Text>
      </TouchableOpacity>

      <SectionLine/>

      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("KakaoTab")}>
        <Text style={styles.text}>카카오톡 네비게이션 적용해보기</Text>
      </TouchableOpacity>

      <SectionLine/>
      
      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Loading")}>
        <Text style={styles.text}>ActivityIndicator (로딩 인디케이터 띄워보기)</Text>
      </TouchableOpacity>

      <SectionLine/>

      <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Layout and Style")}>
        <Text style={styles.text}>Layout and Style (여러가지 레이아웃 및 스타일 구성해보기)</Text>
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
        <Stack.Screen name="KakaoProfile" component={KakaoProfile} />
        <Stack.Screen name="KakaoChat" component={KakaoChat} />
        <Stack.Screen name="KakaoTab" component={KakaoTab} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Layout and Style" component={Layout} options={{headerShown: false}} />
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
    width: '100%',
    padding: 15,
  },
  text: {
    fontSize: 20,
  }
})

export default App;