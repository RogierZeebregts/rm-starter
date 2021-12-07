import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1', age: 10 },
        { name: 'friend #2', age: 10 },
        { name: 'friend #3', age: 10 },
        { name: 'friend #4', age: 10 },
        { name: 'friend #5', age: 10 },
        { name: 'friend #6', age: 10 },
        { name: 'friend #7', age: 10 },
        { name: 'friend #8', age: 10 },
    ]

    const Item = ({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
    }

    return <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={Item}
    />
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen
