import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native';

const createAlert = ( button="정의되지 않은" ) => {
  Alert.alert(
    `${button}`,
    `${button} 버튼입니다.`,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
}

const KakaoProfile = () => {
  return (
    <ImageBackground source={require("../img/profileImg/backgroundImage.jpg")} style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          {/* 왼쪽 상단 닫기 버튼 */}
          <TouchableOpacity onPress={() => createAlert("닫기")}>
            <Image source={require("../img/profileImg/close.png")} style={styles.icon}/>
          </TouchableOpacity>

          {/* 오른쪽 상단 버튼 3개 */}
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => createAlert("선물하기")}>
              <Image source={require("../img/profileImg/gift-box.png")} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => createAlert("송금코드")}>
              <Image source={require("../img/profileImg/qr-code.png")} style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => createAlert("설정")}>
              <Image source={require("../img/profileImg/setting.png")} style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>

        {/* 프로필 사진 & 이름 */}
        <View style={styles.profileContainer}>
          <View style={{margin: 40, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => createAlert()}>
              <Image source={require("../img/profileImg/profile.jpg")} style={styles.profileImage}/>
            </TouchableOpacity>
            <Text style={styles.text}>박경민</Text>
          </View>
        </View>

        {/* 하단 버튼 3개 */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => createAlert("나와의 채팅")} style={styles.iconContainer}>
            <Image source={require("../img/profileImg/chat.png")} style={styles.bottomIcon}/>
            <Text style={styles.iconText}>나와의 채팅</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => createAlert("프로필 편집")} style={styles.iconContainer}>
            <Image source={require("../img/profileImg/pen.png")} style={styles.bottomIcon}/>
            <Text style={styles.iconText}>프로필 편집</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => createAlert("카카오스토리")} style={styles.iconContainer}>
            <Image source={require("../img/profileImg/quotation-mark.png")} style={styles.bottomIcon}/>
            <Text style={styles.iconText}>카카오스토리</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContainer: {
    backgroundColor: '#00000030',
    height: '100%',
    width: '100%'
  },
  text: {
    fontSize: 20,
    color: 'white',
    marginTop: 15
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  icon: {
    width: 20,
    height: 20,
    margin: 10
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '80%',
    borderBottomWidth: 1,
    borderColor: '#DCDCDC'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 30
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20
  },
  iconContainer: {
    alignItems: 'center'
  },
  bottomIcon: {
    width: 25,
    height: 25,
    marginBottom: 10
  },
  iconText: {
   color: 'white'
  }
})

export default KakaoProfile;