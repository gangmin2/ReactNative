import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import RN from '../img/rn.png'

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>이미지 출력하기</Text>
      <Image source={RN} style={styles.image}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 20
    },
    image: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        margin: 15
    }
})

export default ImageScreen;