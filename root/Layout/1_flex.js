import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Flex = ({ navigation }) => {
    return (
        <View style={{flex: 1}}>
            <View style={[styles.container, {flex: 1, backgroundColor: "pink"}]}>
                <Text style={styles.text}>flex: 1</Text>
            </View>
            <View style={[styles.container, {flex: 2, backgroundColor: "skyblue"}]}>
                <Text style={styles.text}>flex: 2</Text>
            </View>
            <View style={[styles.container, {flex: 5, backgroundColor: "palegoldenrod"}]}>
                <Text style={styles.text}>flex: 5</Text>
            </View>
            <View style={[styles.container, {flex: 3, backgroundColor: "palegreen"}]}>
                <Text style={styles.text}>flex: 3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Flex