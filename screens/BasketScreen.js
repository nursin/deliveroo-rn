import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../Redux/slices/restaurantSlice';
import { useDispatch, useSelector } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/solid";

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaraunt = useSelector(selectRestaurant);
    const items = useSelector((state) => state.basket.items)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    // useMemo, if items did not change it wont recompute
    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[items.id] = results[items.id] || []).push(item);
            return results;
        }, {});
        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    // console.log(groupedItemsInBasket);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="pb-5 border-b border-[#00CCBB] bg-white shadow-sm">
            <View>
                <Text className="text-lg font-bold text-center" >Basket</Text>
                <Text className="text-center text-gray-400" >{restaraunt.title}</Text>
            </View>

            <TouchableOpacity
                onPress={navigation.goBack}
                className="rounded-full bg-gray-100 absolute top-3 right-3"
            >
                <XCircleIcon color="#00CCBB" height={50} width={50} />
            </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-3">
            <Image source={{
                uri: "https://links.papareact.com/wru",
            }}
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
            />
            <Text className="flex-1" >Deliver in 50-75 min</Text>
            <TouchableOpacity>
                <Text className="text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
            {items.map((item) => (
                <View className="flex-row items-center space-x-3 bg-white py-2 px-5" key={item.id}>
                    <Text>3 x</Text>
                    {console.log(item.image)}
                    <Image 
                        source={{
                            uri: item.image
                        }}
                        className="h-10 w-10 rounded-full"
                    />
                    <Text className="flex-1">{item.title}</Text>

                    <Text className="flex-1">{item.name}</Text>
                    <Text>$3.99</Text>
                    <Text>Remove</Text>
                </View>
            ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
            <View className="flex-row justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <Text className="text-gray-400">$49.99</Text>
            </View>

            <View className="flex-row justify-between">
                <Text className="text-gray-400">Delivery Fee</Text>
                <Text className="text-gray-400">$9.99</Text>
            </View>

            <View className="flex-row justify-between">
                <Text>Order Total</Text>
                <Text className="font-extrabold">$59.98</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Preparing")} className="rounded-lg bg-[#00CCBB] p-4">
                <Text className="text-center text-white text-lg font-bold">Place Order</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen