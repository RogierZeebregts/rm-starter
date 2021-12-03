import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'friend #1' },
        { name: 'friend #2' },
        { name: 'friend #3' },
        { name: 'friend #4' },
        { name: 'friend #5' },
        { name: 'friend #6' },
        { name: 'friend #7' },
        { name: 'friend #8' },
    ]

    const Item = ({ item }) => {
        return <Text>{item.name}</Text>
    }

    return <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={Item}
    />
}

const styles = StyleSheet.create({})

export default ListScreen
