import { View, Text, Image, Animated, Pressable } from 'react-native'
import React from 'react'
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(Pressable);

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    const navigation = useNavigation();
    const scaleValue = new Animated.Value(1);
    const opacityValue = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.parallel([
            Animated.spring(scaleValue, {
              toValue: 0.98,
              friction: 3,
              useNativeDriver: true,
            }),
            Animated.timing(opacityValue, {
              toValue: 0.8, // Decrease opacity to 0.8 on press in
              duration: 100,
              useNativeDriver: true,
            }),
          ]).start();
    };

    const handlePressOut = () => {
        Animated.parallel([
            Animated.spring(scaleValue, {
              toValue: 1,
              friction: 5,
              useNativeDriver: true,
            }),
            Animated.timing(opacityValue, {
              toValue: 1, // Restore opacity to 1 on press out
              duration: 100,
              useNativeDriver: true,
            }),
          ]).start();
    };

    const onPress = () => navigation.navigate("Restaurant", {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
    });

    return (
        <AnimatedTouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={onPress}
            style={[
                { transform: [{ scale: scaleValue }], opacity: opacityValue },
                'bg-blue-500 p-4 rounded-lg',
              ]}
            activeOpacity={1}
            className="bg-white mr-3 shadow rounded-sm"
        >
            <Image
                source={{
                    uri: imgUrl,
                }}
                className="h-36 w-64 rounded-sm"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2" >{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text className="text-gray-500">
                        <Text className="text-green-500" >{rating}</Text> · {genre}
                    </Text>
                </View>
                <View className="flex-row">
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-xs text-gray-500" >Nearby · {address}</Text>
                </View>
            </View>
        </AnimatedTouchableOpacity>
    )
}

export default RestaurantCard