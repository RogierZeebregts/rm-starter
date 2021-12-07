import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetail = ({ title, imageSource }) => {
    return <View>
        <Image source={imageSource} />
        <Text>{title}</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ImageDetail
