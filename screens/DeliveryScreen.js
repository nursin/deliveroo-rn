import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { selectRestaurant } from '../Redux/slices/restaurantSlice';
import { useDispatch, useSelector } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import * as Progress from "react-native-progress"
import MapView, { Marker } from "react-native-maps"

const DeliveryScreen = () => {
    const restaraunt = useSelector(selectRestaurant);
    const navigation = useNavigation();

    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className="z-50">
                <View className="flex-row justify-between items center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XCircleIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-3xl font-bold">44-55 Minutes</Text>
                        </View>
                        <Image
                            source={{
                                uri: "https://links.papareact.com/fls"
                            }}
                            className="h-20 w-20"
                        />
                    </View>

                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

                    <Text className="mt-3 text-gray-400">Your order at nanados is being prepared</Text>
                </View>
            </SafeAreaView>
            <MapView
                initialRegion={{
                    latitude: 39.372377,
                    longitude: -76.451642,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                className="flex-1 -mt-10 z-0"
                mapType='mutedStandard'
            >

                <Marker
                    coordinate={{
                        latitude: 39.372377,
                        longitude: -76.451642,
                    }}
                    title="Wagamama"
                    description='Eat Better Baby'
                    identifier='origin'
                    pinColor='#00CCBB'
                />
            </MapView>
        </View>
    )
}

export default DeliveryScreen