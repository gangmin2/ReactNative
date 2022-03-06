import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const KakaoFriend = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Friend Tab</Text>
        </View>
    )
}

const KakaoChat = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Chat Tab</Text>
        </View>
    )
}

const KakaoView = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>View Tab</Text>
        </View>
    )
}

const KaKaoShopping = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Shopping Tab</Text>
        </View>
    )
}

const KakaoAdd = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Add Tab</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

const KakaoTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='친구'
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen
                name="친구"
                component={KakaoFriend}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{}}>
                                <Image source={ focused ? require("../img/tabImg/focusedUser.png") : require("../img/tabImg/user.png") } style={styles.icon} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="채팅"
                component={KakaoChat}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{}}>
                                <Image source={ focused ? require("../img/tabImg/focusedChat.png") : require("../img/tabImg/chat.png") } style={styles.icon} />
                            </View>
                        )
                    }
                }}
                
            />
            <Tab.Screen
                name="뷰"
                component={KakaoView}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{}}>
                                <Image source={ focused ? require("../img/tabImg/focusedHashtag.png") : require("../img/tabImg/hashtag.png") } style={styles.icon} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="쇼핑"
                component={KaKaoShopping}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{}}>
                                <Image source={ focused ? require("../img/tabImg/focusedStar.png") : require("../img/tabImg/star.png") } style={styles.icon} />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="더보기"
                component={KakaoAdd}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{}}>
                                <Image source={ focused ? require("../img/tabImg/focusedEllipsis.png") : require("../img/tabImg/ellipsis.png") } style={styles.icon} />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 20,
        width: 20
    }
})

export default KakaoTab