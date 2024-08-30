import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';

const data = [
    {
        id: "1",
        imgUrl: "https://links.papareact.com/gn7",
        title: "Yo! Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description: "This is a Test description",
        dishes: [{
            id: "1",
            imgUrl: "https://links.papareact.com/gn7",
            title: "Yo! Sushi",
            rating: 4,
            genre: "Japanese",
            address: "123 Main St",
            short_description: "This is a Test description",
            dishes: [],
            long: 20,
            lat: 0,
        },
        {
            id: "2",
            imgUrl: "https://links.papareact.com/gn7",
            title: "ushi",
            rating: 3,
            genre: "Japanese",
            address: "123 Main St",
            short_description: "This is a Test description",
            dishes: [],
            long: 20,
            lat: 0,
        },
        {
            id: "3",
            imgUrl: "https://links.papareact.com/gn7",
            title: "Yoshi",
            rating: 4,
            genre: "Japanese",
            address: "123 Main St",
            short_description: "This is a Test description",
            dishes: [],
            long: 20,
            lat: 0,
        },
        {
            id: "4",
            imgUrl: "https://links.papareact.com/gn7",
            title: "Sushi",
            rating: 4,
            genre: "Japanese",
            address: "123 Main St",
            short_description: "This is a Test description",
            dishes: [],
            long: 20,
            lat: 0,
        },
        {
            id: "5",
            imgUrl: "https://links.papareact.com/gn7",
            title: "Yo!",
            rating: 4,
            genre: "Japanese",
            address: "123 Main St",
            short_description: "This is a Test description",
            dishes: [],
            long: 20,
            lat: 0,
        },],
        long: 20,
        lat: 0,
    },
    {
        id: "2",
        imgUrl: "https://links.papareact.com/gn7",
        title: "ushi",
        rating: 3.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description: "This is a Test description",
        dishes: [],
        long: 20,
        lat: 0,
    },
    {
        id: "3",
        imgUrl: "https://links.papareact.com/gn7",
        title: "Yoshi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description: "This is a Test description",
        dishes: [],
        long: 20,
        lat: 0,
    },
    {
        id: "4",
        imgUrl: "https://links.papareact.com/gn7",
        title: "Sushi",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description: "This is a Test description",
        dishes: [],
        long: 20,
        lat: 0,
    },
    {
        id: "5",
        imgUrl: "https://links.papareact.com/gn7",
        title: "Yo!",
        rating: 4.5,
        genre: "Japanese",
        address: "123 Main St",
        short_description: "This is a Test description",
        dishes: [],
        long: 20,
        lat: 0,
    },
];

const FeaturedRow = ({ title, description }) => {

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* restaraunt cards */}
                {data?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        imgUrl={restaurant.imgUrl}
                        title={restaurant.title}
                        rating={restaurant.rating}
                        genre={restaurant.genre}
                        address={restaurant.address}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}

            </ScrollView>
        </View>

    )
}

export default FeaturedRow