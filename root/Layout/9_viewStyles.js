import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ViewStyles = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>ViewStyles</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})

export default ViewStyles