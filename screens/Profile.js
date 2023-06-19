import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import * as DocumentPicker from 'expo-document-picker';

import UploadImage from "../components/UploadImage";

const Profile = ({ navigation }) => {

  const [accountType, setAccountType] = useState("");

  useEffect(() => {
    getAccountType();
  }, []);
  
  const getAccountType = async () => {
    try {
      const value = await AsyncStorage.getItem("accountType");

      setAccountType(value);
    } catch (error) {
      console.log(error);
    }
  }

  const selectDocument = async () => {
    try {
      const doc = await DocumentPicker.pick()
      console.log(doc)
    } catch (error) {
      console.log("There was an error uploading the document", error)
    }
  }

  return (
    <SafeAreaView className="bg-gray-50 h-[100vh] py-10">
      {
        (accountType === "JobSeeker") ? (
          <View className="">
            <View className="w-[100vw] flex flex-col justify-center items-center">
              <UploadImage />
            </View>

            <View className="px-11">
              <View className="w-[80%] mb-5">
                <Text className="mb-1">Name</Text>
                <TextInput 
                  className="w-full rounded-lg py-1 px-4 border-2 border-gray-300"
                />
              </View>

              <View className="w-[12%] mb-5">
                <Text className="mb-1">Age</Text>
                <TextInput 
                  keyboardType='numeric'
                  className="w-full rounded-lg py-1 px-4 border-2 border-gray-300"
                />
              </View>

              <View className="w-[80%] mb-5">
                <Text className="mb-1">Email</Text>
                <TextInput 
                  className="w-full rounded-lg py-1 px-4 border-2 border-gray-300"
                />
              </View>

              <View className="w-[80%] mb-5">
                <Text className="mb-1">Telephone</Text>
                <TextInput 
                  keyboardType='numeric'
                  className="w-full rounded-lg py-1 px-4 border-2 border-gray-300"
                />
              </View>

              <View className="w-[80%] mb-5">
                <Text className="mb-1">CV</Text>
                <TouchableOpacity onPress={() => {selectDocument()}}><Text>Upload 📑</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (accountType === "Client") ? (
          <Text className=" text-red-500">Welcome Client</Text>
        ) : (
          <View className="flex justify-center items-center w-[100vw] h-[100vh]">
            <View>
              <Text className="mb-2">Something went wrong! </Text>
              <View className="">
                <Text>Please go back to Account Type selection</Text>
                <TouchableOpacity onPress={() => {navigation.navigate("OnBoarding")}} className="p-3 rounded-lg bg-orange-300 w-24"><Text>Go Back</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        )
      }
    </SafeAreaView>
  )
}

export default Profile