import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const TestView = ({ value, color, count }) => {
    if (count) {
        return (
            <View style={{backgroundColor: `${color}`, flex: 1}}>
                <Text style={styles.text}>AlignItems: '{value}'</Text>
                <View style={[styles.container, {alignItems: `${value}`}]}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{backgroundColor: `${color}`, flex: 1}}>
                <Text style={styles.text}>AlignItems: '{value}'</Text>
                <View style={[styles.container, {alignItems: `${value}`}]}>
                    <View style={styles.box}></View>
                </View>
            </View>
        )
    }
}

const AlignItems = ({ navigation }) => {
    const [value, setValue] = useState("baseline")
    const [selected, setSelected] = useState(0)
    const [count, setCount] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>AlignItems</Text>
            <Button title="single" onPress={() => setCount(false)} color={count ? 'skyblue' : 'blue'}/>
            <Button title="multi" onPress={() => setCount(true)} color={count ? 'blue' : 'skyblue'}/>
            <View style={{marginTop: 20}}>
                <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                    <Button title="baseline" onPress={() => [setValue("baseline"), setSelected(0)]} color={selected == 0 ? 'blue' : 'skyblue'}/>
                    <Button title="center" onPress={() => [setValue("center"), setSelected(1)]} color={selected == 1 ? 'blue' : 'skyblue'}/>
                    <Button title="flex-start" onPress={() => [setValue("flex-start"), setSelected(2)]} color={selected == 2 ? 'blue' : 'skyblue'}/>
                    <Button title="flex-end" onPress={() => [setValue("flex-end"), setSelected(3)]} color={selected == 3 ? 'blue' : 'skyblue'}/>
                    <Button title="stretch" onPress={() => [setValue("stretch"), setSelected(4)]} color={selected == 4 ? 'blue' : 'skyblue'}/>
                </ScrollView>
                <View  style={{flexDirection: 'row', marginTop: 20}}>
                </View>
            </View>
            <TestView value={value} color={'skyblue'} count={count}> </TestView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        backgroundColor: 'blue',
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

export default AlignItems