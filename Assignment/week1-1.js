import React from 'react'
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native'

const App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>

            <View style={styles.topContainer}>
                <Text>Powderblue</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.yellowContainer}>
                        <Text>Yellow</Text>
                    </View>
                    <View style={styles.lavenderContainer}>
                        <Text>Lavender</Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <Text>Pink</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContainer: {
        flex: 3,
        flexDirection: 'row'
    },
    leftContainer: {
        flex: 1
    },
    rightContainer: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    yellowContainer: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lavenderContainer: {
        flex: 2,
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default App