import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#009DFF" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default Loading