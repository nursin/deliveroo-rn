import { Text, Pressable, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <Pressable className="relative mr-2">
            <Image
                source={{
                    uri: imgUrl,
                }}
                className="h-20 w-20 rounded"
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </Pressable>
    )
}

export default CategoryCard