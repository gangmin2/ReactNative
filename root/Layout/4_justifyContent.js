import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TestView = ({ value, color, selected }) => {
    if (selected <= 2) {
        return (
            <View style={{backgroundColor: `${color}`, flex: 1}}>
                <Text style={styles.text}>justifyContent: '{value}'</Text>
                <View style={[styles.container, {justifyContent: `${value}`}]}>
                    <View style={styles.box}></View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{backgroundColor: `${color}`, flex: 1}}>
                <Text style={styles.text}>justifyContent: '{value}'</Text>
                <View style={[styles.container, {justifyContent: `${value}`}]}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>
            </View>
        )
    }
}

const JustifyContent = ({ navigation }) => {
    const [value, setValue] = useState("center")
    const [selected, setSelected] = useState("0")
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>JustifyContent</Text>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Button title="center" onPress={() => [setValue("center"), setSelected(0)]} color={selected == 0 ? 'red' : 'pink'}/>
                    <Button title="flex-start" onPress={() => [setValue("flex-start"), setSelected(1)]} color={selected == 1 ? 'red' : 'pink'}/>
                    <Button title="flex-end" onPress={() => [setValue("flex-end"), setSelected(2)]} color={selected == 2 ? 'red' : 'pink'}/>
                </View>
                <View  style={{flexDirection: 'row'}}>
                    <Button title="space-between" onPress={() => [setValue("space-between"), setSelected(3)]} color={selected == 3 ? 'red' : 'pink'}/>
                    <Button title="space-around" onPress={() => [setValue("space-around"), setSelected(4)]} color={selected == 4 ? 'red' : 'pink'}/>
                    <Button title="space-evenly" onPress={() => [setValue("space-evenly"), setSelected(5)]} color={selected == 5 ? 'red' : 'pink'}/>
                </View>
            </View>
            <TestView value={value} color={'pink'} selected={selected}></TestView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
})

export default JustifyContent