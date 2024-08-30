import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const data = [
  {
    id: "1",
    imgUrl: "https://links.papareact.com/gn7",
    title: "Yo! Sushi",
    rating: 4.5,
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

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState(data);
  // use effect layout is when the layout loads
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  //  use effect is when the component loads
  // useEffect(() => {

  // }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery Now!</Text>
          <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" />
          <TextInput placeholderTextColor={"gray"} placeholder='Restaurants and cuisines' inputMode='default' />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/*  Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories?.map((category) => (
          // {console.log(category)}
          <FeaturedRow
            key={category.id}
            title={category.title}
            description={category.short_description}
          />
        ))}

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen