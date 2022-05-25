import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SectionLine from './util/section';

import Flex from './Layout/1_flex';
import WidthandHeight from './Layout/2_width_height';
import FlexDirection from './Layout/3_flexDirection';
import JustifyContent from './Layout/4_justifyContent'
import AlignItems from './Layout/5_alignItems';
import Absolute from './Layout/6_absolute';
import ImageStyles from './Layout/7_imageStyles';
import TextStyles from './Layout/8_textStyles';
import ViewStyles from './Layout/9_viewStyles';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Flex")}>
                <Text style={styles.text}>Flex</Text>
            </TouchableOpacity>

            <SectionLine />

            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Width and Height")}>
                <Text style={styles.text}>Width and Height</Text>
            </TouchableOpacity>

            <SectionLine />

            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Flex Direction")}>
                <Text style={styles.text}>Flex Direction</Text>
            </TouchableOpacity>

            <SectionLine />

            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Justify Content")}>
                <Text style={styles.text}>Justify Content</Text>
            </TouchableOpacity>

            <SectionLine />

            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Align Items")}>
                <Text style={styles.text}>Align Items</Text>
            </TouchableOpacity>

            <SectionLine />

            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Absolute")}>
                <Text style={styles.text}>Absolute</Text>
            </TouchableOpacity>

            <SectionLine />

            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Image Styles")}>
                <Text style={styles.text}>Image Styles</Text>
            </TouchableOpacity>

            <SectionLine />

            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("Text Styles")}>
                <Text style={styles.text}>Text Styles</Text>
            </TouchableOpacity>

            <SectionLine />

            <TouchableOpacity style={styles.touchableContainer} onPress={() => navigation.navigate("View Styles")}>
                <Text style={styles.text}>View Styles</Text>
            </TouchableOpacity>
        </View>
    );
}



const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Layout and Style" component={Home} />
            <Stack.Screen name="Flex" component={Flex} />
            <Stack.Screen name="Width and Height" component={WidthandHeight} />
            <Stack.Screen name="Flex Direction" component={FlexDirection} />
            <Stack.Screen name="Justify Content" component={JustifyContent} />
            <Stack.Screen name="Align Items" component={AlignItems} />
            <Stack.Screen name="Absolute" component={Absolute} />
            <Stack.Screen name="Image Styles" component={ImageStyles} />
            <Stack.Screen name="Text Styles" component={TextStyles} />
            <Stack.Screen name="View Styles" component={ViewStyles} />
        </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  touchableContainer: {
    width: '100%',
    padding: 15,
  },
  text: {
    fontSize: 20,
  }
})

export default Layout;