import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import { icons } from "../constants"

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
    const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View className="px-4">
        <View className="mb-5">
            <Text className=" text-gray-500">Hello Ahmad,</Text>
            <Text className="text-2xl font-bold">Find your perfect job</Text>
        </View>

        <View className="">
            <View className="flex flex-row mb-4">
                <TextInput
                    value=""
                    onChange={() => {}}
                    placeholder='Find your job'
                    className="w-[85%] rounded-xl bg-gray-100 mr-2 pl-4"
                />
                
                <TouchableOpacity onPress={() => {}} className="w-[15%] p-2 aspect-square rounded-xl bg-orange-400">
                    <Image 
                        source={icons.search}
                        resizeMode='contain'
                        className="w-full h-full"
                    />
                </TouchableOpacity>
            </View>

            <View className="px-4">
                <FlatList 
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity className={`px-3 py-2 border-2 border-black rounded-full ${activeJobType===item ? "opacity-100" : "opacity-20"}`} onPress={() => { setActiveJobType(item)}}>
                            <Text>{ item }</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: 10}}
                    horizontal
                />
            </View>
        </View>
    </View>
  )
}

export default Welcome