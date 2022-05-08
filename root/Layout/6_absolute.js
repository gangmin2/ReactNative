import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Absolute = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Absolute</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})

export default Absolute