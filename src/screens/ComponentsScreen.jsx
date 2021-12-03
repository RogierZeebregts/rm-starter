import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const ComponentsScreen = () => {
    const name = 'Rogier'

    return (
        <View>
            <Text style={styles.textStyle}>This is the Components Screen</Text>
            <Text style={styles.textStyle2}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    },
})

export default ComponentsScreen
