import React from 'react';
import { FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetails';

const ImageScreen = () => {
    const images = [
        { title: 'Forest', image: require('../../assets/images/forest.jpg') },
        { title: 'Beach', image: require('../../assets/images/beach.jpg') },
        { title: 'Mountain', image: require('../../assets/images/mountain.jpg') },
    ]

    return <FlatList
        keyExtractor={(images) => images.title}
        data={images}
        renderItem={({ item }) => <ImageDetail title={item.title} imageSource={item.image}/>}
    />
}

export default ImageScreen
