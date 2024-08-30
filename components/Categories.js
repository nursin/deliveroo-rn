import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

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
  
const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* CategoryCard */}
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
        </ScrollView>
    )
}

export default Categories