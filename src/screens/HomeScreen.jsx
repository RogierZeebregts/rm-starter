import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
    const { navigate } = navigation

    return <View>
        <Text style={styles.textStyle}>Hi There!</Text>
        <Button
            title="Go to Components Demo"
            onPress={() => navigate('Components')}
        />
        <Button
            title="Go to List Demo"
            onPress={() => navigate('List')}
        />
        <Button
            title="Go to Image Demo"
            onPress={() => navigate('Image')}
        />
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    buttonStyle: {
        fontSize: 30,
    }
});

export default HomeScreen;
