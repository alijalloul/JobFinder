import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { TouchableOpacity, Text, View, SafeAreaView, FlatList } from 'react-native'

const OnBoarding = ({ navigation }) => {

  const setAccountType = async (accountType) => {
    try {
      await AsyncStorage.setItem("accountType", accountType);

      navigation.navigate("Profile");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView className="flex justify-center items-center w-[100vw] h-[100vh]">
      <Text className="text-4xl mb-5">I am looking for...</Text>
      <View className="flex flex-row w-[80%] justify-between">
        <TouchableOpacity onPress={() => setAccountType("JobSeeker")} className="flex justify-center items-center py-4 border-2 border-black rounded-lg w-36"><Text className="text-lg">A Job</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setAccountType("Client")} className="flex justify-center items-center py-4 border-2 border-black rounded-lg w-36"><Text className="text-lg">A Worker</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default OnBoarding