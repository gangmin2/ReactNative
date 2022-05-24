import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WidthandHeight = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.titleText}>Width &amp; Height</Text>
        <View style={[styles.box, {width: 100, height: 100}]}>
            <Text style={styles.contentText}>width: 100</Text>
            <Text style={styles.contentText}>height: 100</Text>
        </View>
        <View style={[styles.box, {width: 150, height: 100}]}>
            <Text style={styles.contentText}>width: 150</Text>
            <Text style={styles.contentText}>height: 100</Text>
        </View>
        <View style={[styles.box, {width: 100, height: 80}]}>
            <Text style={styles.contentText}>width: 100</Text>
            <Text style={styles.contentText}>height: 80</Text>
        </View>
        <View style={[styles.box, {width: 300, height: 150}]}>
            <Text style={styles.contentText}>width: 300</Text>
            <Text style={styles.contentText}>height: 150</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    box: {
        backgroundColor: 'red',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 30,
        fontWeight: '900',
        margin: 20
    },
    contentText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    }
})

export default WidthandHeight