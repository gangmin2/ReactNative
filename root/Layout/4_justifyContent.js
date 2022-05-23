import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const TestView = ({ value, color, count }) => {
    if (count) {
        return (
            <View style={{backgroundColor: `${color}`, flex: 1}}>
                <Text style={styles.text}>JustifyContent: '{value}'</Text>
                <View style={[styles.container, {justifyContent: `${value}`}]}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{backgroundColor: `${color}`, flex: 1}}>
                <Text style={styles.text}>JustifyContent: '{value}'</Text>
                <View style={[styles.container, {justifyContent: `${value}`}]}>
                    <View style={styles.box}></View>
                </View>
            </View>
        )
    }
}

const JustifyContent = ({ navigation }) => {
    const [value, setValue] = useState("center")
    const [selected, setSelected] = useState(0)
    const [count, setCount] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>AlignItems</Text>
            <Button title="single" onPress={() => setCount(false)} color={count ? 'pink' : 'red'}/>
            <Button title="multi" onPress={() => setCount(true)} color={count ? 'red' : 'pink'}/>
            <View style={{marginTop: 20}}>
                <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                    <Button title="center" onPress={() => [setValue("center"), setSelected(0)]} color={selected == 0 ? 'red' : 'pink'}/>
                    <Button title="flex-start" onPress={() => [setValue("flex-start"), setSelected(1)]} color={selected == 1 ? 'red' : 'pink'}/>
                    <Button title="flex-end" onPress={() => [setValue("flex-end"), setSelected(2)]} color={selected == 2 ? 'red' : 'pink'}/>
                    <Button title="space-between" onPress={() => [setValue("space-between"), setSelected(3)]} color={selected == 3 ? 'red' : 'pink'}/>
                    <Button title="space-around" onPress={() => [setValue("space-around"), setSelected(4)]} color={selected == 4 ? 'red' : 'pink'}/>
                    <Button title="space-evenly" onPress={() => [setValue("space-evenly"), setSelected(5)]} color={selected == 5 ? 'red' : 'pink'}/>
                </ScrollView>
                <View  style={{flexDirection: 'row', marginTop: 20}}>
                </View>
            </View>
            <TestView value={value} color={'pink'} count={count}> </TestView>
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
        fontWeight: '900',
    },
})

export default JustifyContent