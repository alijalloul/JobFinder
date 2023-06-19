import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView  } from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as DocumentPicker from 'expo-document-picker';

import UploadImage from "../components/UploadImage";

const Profile = ({ navigation }) => {

  const [accountType, setAccountType] = useState("");
  const [CVname, setCVname] = useState("");

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
      const file = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });
  
      if (file.type === 'success') {
        setCVname(file.uri)
      }
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
    <SafeAreaView className="bg-gray-50 h-[100vh] py-10 flex-1">
      
      {
        (accountType === "JobSeeker") ? (
          <ScrollView>
            <View className="w-[100vw] flex flex-col justify-center items-center">
              <UploadImage />
            </View>

            <View className="px-11">
              <View className="relative w-[80%] mb-5">
                <Text className="absolute mb-1">Name</Text>
                <TextInput 
                  className="absolute w-full rounded-md py-2 px-4 border-2 border-gray-300 focus:border-orange-400 transition-all duration-200 ease-in-out"
                />
              </View>

              <View className="w-[15%] mb-5">
                <Text className="mb-1">Age</Text>
                <TextInput 
                  keyboardType='numeric'
                  className="w-full rounded-md py-2 px-4 border-2 border-gray-300 focus:border-orange-400 transition-all duration-200 ease-in-out"
                />
              </View>

              <View className="w-[80%] mb-5">
                <Text className="mb-1">Email</Text>
                <TextInput 
                  className="w-full rounded-md py-2 px-4 border-2 border-gray-300 focus:border-orange-400 transition-all duration-200 ease-in-out"
                />
              </View>

              <View className="w-[80%] mb-5">
                <Text className="mb-1">Telephone</Text>
                <TextInput 
                  keyboardType='numeric'
                  className="w-full rounded-md py-2 px-4 border-2 border-gray-300 focus:border-orange-400 transition-all duration-200 ease-in-out"
                />
              </View>

              <View className="w-[80%] mb-5">
                <Text className="mb-1">Main Title</Text>
                <TextInput 
                  className="w-full rounded-md py-2 px-4 border-2 border-gray-300 focus:border-orange-400 transition-all duration-200 ease-in-out"
                />
              </View>

              <View className="w-[80%] mb-5">
                <Text className="mb-1">Introduction</Text>
                <TextInput 
                  multiline={true}
                  numberOfLines={4}
                  className="w-full rounded-md py-2 px-4 border-2 border-gray-300 focus:border-orange-400 transition-all duration-200 ease-in-out"
                />
              </View>

              <View className="w-[80%] mb-5">
                <Text className="mb-1">CV</Text>
                <View className="flex flex-row">
                  <TouchableOpacity onPress={() => {selectDocument()}} className="bg-orange-400 flex justify-center items-center rounded-lg p-3 mr-2"><Text className="text-white">Upload 📑</Text></TouchableOpacity>
                  <Text>{CVname.split("DocumentPicker/").slice(1).join("DocumentPicker/")}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
    </KeyboardAvoidingView>
  )
}

export default Profile