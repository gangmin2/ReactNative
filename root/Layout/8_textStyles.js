import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const ColorStyle = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: 30, color: 'red', marginVertical: 10}}>color: 'red'</Text>
            <Text style={{fontSize: 30, color: 'orange', marginVertical: 10}}>color: 'orange'</Text>
            <Text style={{fontSize: 30, color: '#101916', marginVertical: 10}}>color: '#101916'</Text>
            <Text style={{fontSize: 30, color: '#009DFF', marginVertical: 10}}>color: '#009DFF'</Text>
            <Text style={{fontSize: 30, color: 'rgb(255, 0, 255)', marginVertical: 10}}>color: 'rgb(255, 0, 255)'</Text>
            <Text style={{fontSize: 30, color: 'rgba(25, 90, 10, 1.0)', marginVertical: 10}}>color: 'rgba(25, 90, 10, 1.0)'</Text>
            <Text style={{fontSize: 30, color: 'blue', marginVertical: 10}}>color: 'blue'</Text>
            <Text style={{fontSize: 30, color: '#53D0AB', marginVertical: 10}}>color: '#53D0AB'</Text>
        </ScrollView>
    )
}

const FontFamilyStyle = () => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: 30, fontFamily: 'serif', marginVertical: 10}}>fontFamily: 'serif'</Text>
            <Text style={{fontSize: 30, fontFamily: 'sans-sefif', marginVertical: 10}}>fontFamily: 'sans-serif'</Text>
            <Text style={{fontSize: 30, fontFamily: 'monospace', marginVertical: 10}}>fontFamily: 'monospace'</Text>
            <Text style={{fontSize: 30, fontFamily: 'cursive', marginVertical: 10}}>fontFamily: 'cursive'</Text>
            <Text style={{fontSize: 30, fontFamily: 'fantasy', marginVertical: 10}}>fontFamily: 'fantasy'</Text>
        </ScrollView>
    )
}

const FontSizeStyle = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: 10}}>fontSize: 10</Text>
            <Text style={{fontSize: 20}}>fontSize: 20</Text>
            <Text style={{fontSize: 30}}>fontSize: 30</Text>
            <Text style={{fontSize: 40}}>fontSize: 40</Text>
            <Text style={{fontSize: 50}}>fontSize: 50</Text>
            <Text style={{fontSize: 60}}>fontSize: 60</Text>
            <Text style={{fontSize: 70}}>fontSize: 70</Text>
        </ScrollView>
    )
}

const FontWeightStyle = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: 30, fontWeight: 'nomal'}}>fontWeight: nomal</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>fontWeight: bold</Text>
            <Text style={{fontSize: 30, fontWeight: '100'}}>fontWeight: 100</Text>
            <Text style={{fontSize: 30, fontWeight: '200'}}>fontWeight: 200</Text>
            <Text style={{fontSize: 30, fontWeight: '300'}}>fontWeight: 300</Text>
            <Text style={{fontSize: 30, fontWeight: '400'}}>fontWeight: 400</Text>
            <Text style={{fontSize: 30, fontWeight: '500'}}>fontWeight: 500</Text>
            <Text style={{fontSize: 30, fontWeight: '600'}}>fontWeight: 600</Text>
            <Text style={{fontSize: 30, fontWeight: '700'}}>fontWeight: 700</Text>
            <Text style={{fontSize: 30, fontWeight: '800'}}>fontWeight: 800</Text>
            <Text style={{fontSize: 30, fontWeight: '900'}}>fontWeight: 900</Text>
        </ScrollView>
    )
}

const IncludeFontPaddingStyle = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{fontSize: 30}}>includeFontPadding ????????? ????????? ???????????? ????????? ?????? ??? ???????????????.</Text>
            <Text style={{fontSize: 30, includeFontPadding: false, backgroundColor: 'skyblue', marginVertical: 20}}>includeFontPadding: false</Text>
            <Text style={{fontSize: 30, includeFontPadding: true, backgroundColor: 'skyblue'}}>includeFontPadding: true</Text>
        </ScrollView>
    )
}

const TextStyles = ({ navigation }) => {
    const [value, setValue] = useState("color")
    const [selected, setSelected] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Text Styles</Text>
            <View>
                <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                    <Button title="color" onPress={() => [setValue("color"), setSelected(0)]} color={selected == 0 ? 'blue' : 'skyblue'}/>
                    <Button title="fontFamily" onPress={() => [setValue("fontFamily"), setSelected(1)]} color={selected == 1 ? 'blue' : 'skyblue'}/>
                    <Button title="fontSize" onPress={() => [setValue("fontSize"), setSelected(2)]} color={selected == 2 ? 'blue' : 'skyblue'}/>
                    <Button title="fontWeight" onPress={() => [setValue("fontWeight"), setSelected(3)]} color={selected == 3 ? 'blue' : 'skyblue'}/>
                    <Button title="includeFontPadding" onPress={() => [setValue("includeFontPadding"), setSelected(4)]} color={selected == 4 ? 'blue' : 'skyblue'}/>
                </ScrollView>
            </View>
            <View style={{flex: 1, margin: 20}}>
                { selected == 0 &&
                    <ColorStyle/>
                }
                { selected == 1 &&
                    <FontFamilyStyle/>
                }
                { selected == 2 &&
                    <FontSizeStyle/>
                }
                { selected == 3 &&
                    <FontWeightStyle/>
                }
                { selected == 4 &&
                    <IncludeFontPaddingStyle/>
                }
            </View>
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

export default TextStyles