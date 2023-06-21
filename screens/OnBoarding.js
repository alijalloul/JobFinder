import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Animated, Dimensions, Easing  } from "react-native";
import * as DocumentPicker from 'expo-document-picker';

import UploadImage from "../components/UploadImage";

const OnBoarding = ({ navigation }) => {
  const [accountType, setAccountType] = useState("");
  const [CVname, setCVname] = useState("");

  const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

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

  const jobButtonValue = new Animated.Value((accountType === "JobSeeker") ? 0 : 1);
  const employeeButtonValue = new Animated.Value((accountType === "Client") ? 0 : 1);
  const heightValue = new Animated.Value(accountType ? windowHeight*0.5 : windowHeight);

  useEffect(() => {
    if (accountType === 'JobSeeker') {
      animateJobButtonForward();
    }else {
      animateJobButtonBackward();
    }

    if (accountType === 'Client') {
      animateEmployeeButtonForward();
    }else {
      animateEmployeeButtonBackward();
    }

    if(accountType){
      animateHeight100to50();
    }
  }, [accountType]);

  const animateJobButtonForward = () => {
    Animated.timing(jobButtonValue, {
      toValue: 1,
      duration: 200,
      easing:  Easing.in,
      useNativeDriver: false,
    }).start();
  };
  const animateJobButtonBackward = () => {
    Animated.timing(jobButtonValue, {
      toValue: 0,
      duration: 200,
      easing:  Easing.in,
      useNativeDriver: false,
    }).start();
  };

  const animateEmployeeButtonForward = () => {
    Animated.timing(employeeButtonValue, {
      toValue: 1,
      duration: 200,
      easing:  Easing.in,
      useNativeDriver: false,
    }).start();
  };
  const animateEmployeeButtonBackward = () => {
    Animated.timing(employeeButtonValue, {
      toValue: 0,
      duration: 200,
      easing:  Easing.in,
      useNativeDriver: false,
    }).start();
  };

  const whiteToOrangeJobButton = jobButtonValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', 'orange'], 
  });
  
  const blackToOrageJobButton = jobButtonValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['black', 'orange'],
  });

  const whiteToOrangeEmployeeButton = employeeButtonValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', 'orange'], 
  });
  
  const blackToOrageEmployeeButton = employeeButtonValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['black', 'orange'],
  });

   const animateHeight100to50 = () => {
    Animated.timing(heightValue, {
      toValue: 50,
      duration: 200,
      easing:  Easing.inOut,
      useNativeDriver: false,
    }).start();
  };

  const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
      <SafeAreaView className=" bg-white flex-1">
        <ScrollView>
          <View style={{height: 800}} className={`flex justify-center items-center w-[100vw] transition-all ease-in-out duration-1000`}>
            <Text className="text-4xl mb-5">I am looking for...</Text>
            <View className="flex flex-row w-[80%] justify-between">
              <AnimatedButton onPress={() => setAccountType("JobSeeker")} style={{backgroundColor: (accountType === "JobSeeker") && whiteToOrangeJobButton, borderColor: (accountType === "JobSeeker") && blackToOrageJobButton}} className={`flex justify-center items-center py-4 border-2 rounded-lg w-36 transition-all ease-in-out duration-200`}><Text className={`text-lg ${(accountType == "JobSeeker") ? "text-white" : ""}`}>A Job</Text></AnimatedButton>
              <AnimatedButton onPress={() => {setAccountType("Client")}} style={{backgroundColor: (accountType === "Client") && whiteToOrangeEmployeeButton, borderColor: (accountType === "Client") && blackToOrageEmployeeButton}} className={`flex justify-center items-center py-4 border-2 border-black rounded-lg w-36 transition-all ease-in-out duration-200 ${(accountType == "Client") ? "bg-orange-400 border-orange-400" : ""}`}><Text className={`text-lg ${(accountType == "Client") ? "text-white" : ""}`}>A Worker</Text></AnimatedButton>
            </View>
          </View>
          
          <View>
            {
              (accountType === "JobSeeker") ? (
                <View>
                  <View className="w-[100vw] flex flex-col justify-center items-center mb-5">
                    <UploadImage />
                  </View>

                  <View className="px-11">
                    <View className="relative w-[80%] mb-5">
                      <Text className="absolute mb-1">Name</Text>
                      <TextInput 
                        className="w-full rounded-md py-2 px-4 border-2 border-gray-300 focus:border-orange-400 transition-all duration-200 ease-in-out"
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
                </View>
              ) : (accountType === "Client") ? (
                <Text className=" text-red-500">Welcome Client</Text>
              ) : (
                null
              )
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default OnBoarding