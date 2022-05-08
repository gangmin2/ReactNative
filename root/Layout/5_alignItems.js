import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AlignItems = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>AlignItems</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})

export default AlignItems