import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TestView = ({ direction, color }) => {
    return (
        <View style={[styles.container, {backgroundColor: `${color}`}]}>
            <Text style={styles.text}>FlexDirection: '{direction}'</Text>
            <View style={{flexDirection: `${direction}`}}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </View>
        </View>
    )
}

const FlexDirection = ({ navigation }) => {
    return (
        <ScrollView>
            <Text style={styles.titleText}>FlexDirection</Text>
            <TestView direction={"column"} color={'lightpink'}></TestView>
            <TestView direction={"row"} color={'lightskyblue'}></TestView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        backgroundColor: 'red',
        width: 80,
        height: 80,
        margin: 20
    },
    titleText: {
        fontSize: 30,
        fontWeight: '900',
        margin: 20
    },
    text: {
        fontSize: 20,
        margin: 20,
        marginBottom: 0,
        fontWeight: '900'
    }
})

export default FlexDirection