import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Alert, Linking } from 'react-native'

const DATA = [
    {
        id: 1,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 2,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 3,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 4,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 5,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 6,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 7,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 8,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 9,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    },
    {
        id: 10,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 11,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 12,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 13,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 14,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 15,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 16,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 17,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 18,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    },
    {
        id: 19,
        title: "박경민",
        description: "디스이즈 리액트 네이티브팀 합격하셨습니다! 축하드립니다!!",
        date: "어제"
    },
    {
        id: 20,
        title: "정주영",
        description: "안녕하세요! 디스이즈 총팀장 정주영입니다.",
        date: "20:28"
    },
    {
        id: 21,
        title: "한재희",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 15기 한재희입니다!!",
        date: "3월 10일"
    },
    {
        id: 22,
        title: "김재원",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 14기 김재원입니다아!",
        date: "19:20"
    },
    {
        id: 23,
        title: "이호준",
        description: "안녕하세요! 디스이즈 리액트 네이티브팀 3기 이호준입니당",
        date: "19:08"
    },
    {
        id: 24,
        title: "김예나",
        description: "안녕하세용 디스이즈 리액트 네이티브팀 15기 김예나입니돠!",
        date: "18:59"
    },
    {
        id: 25,
        title: "조영훈",
        description: "안녕하세요 디스이즈 서버팀 14기 조영훈입니당",
        date: "18:50"
    },
    {
        id: 26,
        title: "김예빈",
        description: "안녕하세요오! 디스이즈 디자인팀 14기 김예빈입니다!",
        date: "18:46"
    },
    {
        id: 27,
        title: "황은화",
        description: "안녕하세요! 디스이즈 마케팅팀 팀장 황은화입니당",
        date: "18:31"
    }
];

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

const chatAlert = ( name="정의되지 않은" ) => {
    Alert.alert(
      `${name}`,
      `${name}님과의 채팅방입니다.`,
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
  
const Item = ({ title, description, date }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => chatAlert(title)}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 10}}>
            <Image source={require("../img/profileImg/profile.jpg")} style={styles.profileImg}/>
        </View>
        <View style={{flex: 5, flexDirection: 'row'}}>
            <View style={{flex: 4}}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={styles.dateText}>{date}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const KakaoChat = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} description={item.description} date={item.date} />
    );
    
    return (
        <>
            <View style={styles.topContainer}>
                <Text style={{fontSize: 25, color: 'black'}}>채팅</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => createAlert("검색")}>
                        <Image source={require("../img/chatImg/search.png")} style={styles.topIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => createAlert("오픈 채팅")}>
                        <Image source={require("../img/chatImg/bubble.png")} style={styles.topIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => createAlert("음악")}>
                        <Image source={require("../img/chatImg/music.png")} style={styles.topIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => createAlert("설정")}>
                        <Image source={require("../img/chatImg/setting.png")} style={styles.topIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                style={styles.container}
                ListHeaderComponent={
                    <TouchableOpacity style={styles.adContainer} onPress={() => Linking.openURL("https://www.naver.com/")}>
                        <Text style={styles.adText}>광고 배너</Text>
                    </TouchableOpacity>
                }
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topContainer: {
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topIcon: {
        width: 18,
        height: 18,
        marginHorizontal: 8
    },
    adContainer: {
        height: 60,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#DCDCDC',
        borderRadius: 10
    },
    adText: {
        fontSize: 25,
        color: '#8C8C8C'
    },
    titleText: {
        fontSize: 17,
        fontWeight: '600'
    },
    descriptionText: {
        fontSize: 15
    },
    dateText: {
        fontSize: 12,
    },
    itemContainer: {
        flexDirection: 'row',
        margin: 10
    },
    profileImg: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: '#AAAAAA',
        borderRadius: 10
    }
})

export default KakaoChat