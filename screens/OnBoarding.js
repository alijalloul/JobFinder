import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Dimensions, Easing, PixelRatio  } from "react-native";
import { useDynamicAnimation, MotiView, MotiText, motify } from "moti";

import * as DocumentPicker from 'expo-document-picker';

import UploadImage from "../components/UploadImage";

const OnBoarding = ({ navigation }) => {
  const [accountType, setAccountType] = useState("");
  const [CVname, setCVname] = useState("");
  const [textInputFocus, setTextInputFocus] = useState({
    fn: false,
    ln: false,
    clientName: false,
    username: false,
    age: false,
    email: false,
    telephone: false,
    location: false,
    website: false,
    title: false,
    introduction: false
  })
  const [workExperience, setWorkExperience] = useState([{ 
    jobTitle: "", 
    company: "",
    years: null
  }]);
  const [education, setEducation] = useState({
    highestDegree: "",
    major: "",
    school: "",
    year: ""
  })

  const [form, setForm] = useState({
    fn: "",
    ln: "",
    clientName: "",
    username: "",
    age: null,
    email: "",
    telephone: null,
    location: "",
    website: "",
    title: "",
    introduction: ""
  })

  const {width: windowWidth, height: windowHeight} = Dimensions.get("window");

  const selectDocument = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });
  
      if (file.type === 'success') {
        setCVname(file.assets[0].uri)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const MotiTouchableOpacity = motify(TouchableOpacity)();
  
  const moveHeaderAnimation = useDynamicAnimation(() => {
    return{
      height: windowHeight
    }
  })

  const moveHeaderBgAnimation = useDynamicAnimation(() => {
    return{
      translateY: 0
    }
  })

  const changeJobButtonBackgroundColorAnimation = useDynamicAnimation(() => {
    return{
      backgroundColor: "transparent",
    }
  })

  const changeEmployeeButtonBackgroundColorAnimation = useDynamicAnimation(() => {
    return{
      backgroundColor: "transparent",
    }
  })

  const fnFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  const lnFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })
  
  const clientNameFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  const usernameFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  const ageFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  const emailFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  const telephoneFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  const locationFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  const websiteFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  const titleFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  const introductionFocusAnimation = useDynamicAnimation(() => {
    return{
      translateX: 0,
      translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black',
    }
  })

  useEffect(() => {
    if(accountType === "JobSeeker"){
      moveHeaderAnimation.animateTo({height: windowHeight*0.3})

      changeJobButtonBackgroundColorAnimation.animateTo({backgroundColor: "red",})
    }else{
      changeJobButtonBackgroundColorAnimation.animateTo({backgroundColor: "white",})
    }

    if(accountType === "Client"){
      moveHeaderAnimation.animateTo({height: windowHeight*0.3})

      changeEmployeeButtonBackgroundColorAnimation.animateTo({backgroundColor: "red",})
    }else{
      changeEmployeeButtonBackgroundColorAnimation.animateTo({backgroundColor: "white",})

    }

    if(accountType === "JobSeeker"){
      moveHeaderBgAnimation.animateTo({ translateY: -windowHeight*(0.22)})
    }else if(accountType === "Client"){
      moveHeaderBgAnimation.animateTo({ translateY: windowHeight*(0.4)})
    }else{
      moveHeaderBgAnimation.animateTo({ translateY: 0})
    }

  }, [accountType])

  useEffect(() => {
    if(textInputFocus.fn || form.fn !== ""){
      fnFocusAnimation.animateTo({ top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , backgroundColor: 'white', color: 'rgb(253,186,116)'})
    }else{
      fnFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10 , translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    
    if(textInputFocus.ln || form.ln !== ""){
      lnFocusAnimation.animateTo({ top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , backgroundColor: 'white', color: 'rgb(253,186,116)'})
    }else{
      lnFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    
    if(textInputFocus.clientName || form.clientName !== ""){
      clientNameFocusAnimation.animateTo({ top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , backgroundColor: 'rgb(255,237,213)', color: 'rgb(253,186,116)'})
    }else{
      clientNameFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    

    if(textInputFocus.username || form.username !== ""){
      if(accountType === "JobSeeker"){
        usernameFocusAnimation.animateTo({ backgroundColor: "white", top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , color: 'rgb(253,186,116)' })
      }else if(accountType === "Client"){
        usernameFocusAnimation.animateTo({ backgroundColor: "rgb(255,237,213)", top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , color: 'rgb(253,186,116)' })
      }
    }else{
      usernameFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    
    if(textInputFocus.age || form.age !== null){
      ageFocusAnimation.animateTo({ top: 0, left: 0, marginLeft: 6, translateY: -7,  opacity: 1, fontSize:12 , backgroundColor: 'white', color: 'rgb(253,186,116)'})
    }else{
      ageFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    
    if(textInputFocus.email || form.email !== ""){
      if(accountType === "JobSeeker"){
        emailFocusAnimation.animateTo({ backgroundColor: "white", top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , color: 'rgb(253,186,116)' })
      }else if(accountType === "Client"){
        emailFocusAnimation.animateTo({ backgroundColor: "rgb(255,237,213)", top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , color: 'rgb(253,186,116)' })
      }    }else{
      emailFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    
    if(textInputFocus.telephone || form.telephone !== null){
      if(accountType === "JobSeeker"){
        telephoneFocusAnimation.animateTo({ backgroundColor: "white", top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , color: 'rgb(253,186,116)' })
      }else if(accountType === "Client"){
        telephoneFocusAnimation.animateTo({ backgroundColor: "rgb(255,237,213)", top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , color: 'rgb(253,186,116)' })
      }    }else{
      telephoneFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    
    if(textInputFocus.location || form.location !== ""){
      locationFocusAnimation.animateTo({ top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , backgroundColor: 'rgb(255,237,213)', color: 'rgb(253,186,116)'})
    }else{
      locationFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    
    if(textInputFocus.website || form.website !== ""){
      websiteFocusAnimation.animateTo({ top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , backgroundColor: 'white', color: 'rgb(253,186,116)'})
    }else{
      websiteFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    
    if(textInputFocus.title || form.title !== ""){
      titleFocusAnimation.animateTo({ top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , backgroundColor: 'white', color: 'rgb(253,186,116)'})
    }else{
      titleFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
    
    if(textInputFocus.introduction || form.introduction !== ""){
      introductionFocusAnimation.animateTo({ top: 0, left: 0, marginLeft: 12, translateY: -7,  opacity: 1, fontSize:12 , backgroundColor: 'white', color: 'rgb(253,186,116)'})
    }else{
      introductionFocusAnimation.animateTo({ top: '25%', left: 0, marginLeft: 10, translateY: 0, opacity:0.5, fontSize: 16, backgroundColor: 'transparent', color: 'black'})
    }
  }, [textInputFocus])

  useEffect(() => {
    console.log(workExperience)
  }, [workExperience])

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
      <SafeAreaView className=" bg-white flex-1">
        <ScrollView>
          <MotiView  
            state={ moveHeaderBgAnimation }
            transition={{ 
              type: "spring",
              damping: 15,
              duration: 300
            }}
            className="absolute left-[-25%] bg-red-100 w-[150%] aspect-square rounded-full"></MotiView>

          <MotiView 
            state={ moveHeaderAnimation }
            transition={{ 
              type: "spring",
              damping: 15,
              duration: 300
            }}
            className={`z-10 flex justify-center items-center w-[100vw] h-[100vh] transition-all ease-in-out duration-1000`}>

            <Text className="text-4xl mb-5">I am looking for...</Text>

            <View style={{ shadowColor: '#171717', shadowOffset: {width: 2, height: 4}, shadowOpacity: 0.31, shadowRadius: 3, elevation: 11}} className="relative flex flex-row w-[80%] justify-center items-center shadow-2xl shadow-black">
              <MotiTouchableOpacity 
                state={ changeJobButtonBackgroundColorAnimation }
                transition={{
                  type: "timing",
                  duration: 200
                }}
                onPress={() => setAccountType("JobSeeker")} 
                className={`bg-transparent flex justify-center items-center py-4 border-2 border-r-[1px] border-[#ffa500] rounded-l-md w-[50%]`}>
                  <Text className={`text-lg font-semibold ${(accountType == "JobSeeker" ? "text-white" : "text-black")}`}>A Job</Text>
              </MotiTouchableOpacity>

              <MotiTouchableOpacity 
                state={ changeEmployeeButtonBackgroundColorAnimation }
                transition={{
                  type: "timing",
                  duration: 200
                }}
                onPress={() => {setAccountType("Client")}} 
                className={`bg-transparent flex justify-center items-center py-4 border-2 border-l-[1px] border-[#ffa500] rounded-r-md w-[50%]`}>
                  <Text className={`text-lg font-semibold ${(accountType == "Client" ? "text-white" : "text-black")}`}>An Employee</Text>
              </MotiTouchableOpacity>
            </View>
          </MotiView>
          
          <View>
            {
              (accountType === "JobSeeker") ? (
                <View>
                  <View className="w-[100vw] flex flex-col justify-center items-center mb-10">
                    <UploadImage />
                  </View>

                  <View className="px-11">

                    <Text className="border-b-[1px] mb-5">Personal Information</Text>
                    <View>
                      <View className="relative flex flex-row justify-between items-center w-full mb-5">
                        <View className="relative flex justify-center items-center w-[45%]">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText
                            state={ fnFocusAnimation } 
                            transition={{
                              type: "timing",
                              delay: 0,
                              duration: 200
                            }} 
                            className={`z-10 absolute px-1`}> First Name</MotiText>
                        </View>

                          <TextInput 
                            className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, fn: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, fn: false})}}
                            onChangeText={(text) => {setForm({...form, fn: text})}}
                          />  
                        </View>

                        <View className="relative flex justify-center items-center w-[45%]">

                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText
                            state={ lnFocusAnimation } 
                            transition={{
                              type: "timing",
                              delay: 0,
                              duration: 200
                            }} 
                            className={`z-10 absolute px-1 `}> Last Name</MotiText>
                        </View>

                          <TextInput 
                            className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, ln: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, ln: false})}}
                            onChangeText={(text) => {setForm({...form, ln: text})}}
                          />
                        </View>
                      </View>

                      <View className="relative flex justify-center items-center w-full mb-5">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText
                            state={ usernameFocusAnimation } 
                            transition={{
                              type: "timing",
                              delay: 0,
                              duration: 200
                            }} 
                            className={`z-10 absolute px-1 `}> Username</MotiText>
                        </View>

                        <TextInput 
                          className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, username: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, username: false})}}
                            onChangeText={(text) => {setForm({...form, username: text})}}
                        />
                      </View>

                      <View className="relative flex justify-center items-center w-[20%] mb-5">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText
                            state={ ageFocusAnimation } 
                            transition={{
                              type: "timing",
                              delay: 0,
                              duration: 200
                            }} 
                            className={`z-10 absolute px-1 `}> Age</MotiText>
                        </View>

                        <TextInput 
                          keyboardType='numeric'
                          className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, age: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, age: false})}}
                            onChangeText={(text) => {setForm({...form, age: text})}}
                        />
                      </View>
                    </View>


                    <Text className="border-b-[1px] mb-5">Contact Information</Text>
                    <View>
                      <View className="relative flex justify-center items-center w-full mb-5">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText 
                            state={ emailFocusAnimation } 
                            transition={{
                              type: "timing",
                              delay: 0,
                              duration: 200
                            }} 
                            className={`z-10 absolute px-1 `}>E-Mail</MotiText>
                        </View>

                        <TextInput 
                          className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, email: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, email: false})}}
                            onChangeText={(text) => {setForm({...form, email: text})}}
                        />
                      </View>

                      <View className="relative flex justify-center items-center w-full mb-5">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText
                            state={ telephoneFocusAnimation } 
                          transition={{
                            type: "timing",
                              delay: 0,
                              duration: 200
                          }}
                          pointerEvents="none" 
                          className={`z-10 absolute px-1 `}>Telephone</MotiText>
                        </View>

                        <TextInput 
                          keyboardType='numeric'
                          className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, telephone: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, telephone: false})}}
                            onChangeText={(text) => {setForm({...form, telephone: text})}}
                        />
                      </View>
                    </View>

                    <Text className="border-b-[1px] mb-5">Introduction</Text>
                    <View>
                      <View className="relative flex justify-center items-center w-full mb-5">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText
                            state={ titleFocusAnimation } 
                            transition={{
                              type: "timing",
                              delay: 0,
                              duration: 200
                            }}
                          pointerEvents="none" 
                          className={`z-10 absolute  px-1 `}>Main Title</MotiText>
                        </View>

                        <TextInput 
                          className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, title: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, title: false})}}
                            onChangeText={(text) => {setForm({...form, title: text})}}
                        />
                      </View>

                      <View className="relative flex justify-center items-center w-full mb-5">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText
                            state={ introductionFocusAnimation } 
                            transition={{
                              type: "timing",
                              delay: 0,
                              duration: 200
                            }}
                            className={`z-10 absolute px-1 `}>About Me</MotiText>
                        </View>

                        <TextInput 
                          multiline={true}
                          numberOfLines={4}
                          className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, introduction: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, introduction: false})}}
                            onChangeText={(text) => {setForm({...form, introduction: text})}}
                        />
                      </View>
                    </View>
                    
                    <Text className="border-b-[1px] mb-5">Work Experince</Text>
                    <View className="mb-5">
                      <View className="relative flex flex-row justify-between items-center w-full mb-5">
                        <Text>Job Title</Text>
                        <Text>Company</Text>
                        <Text>Years</Text>
                        <Text></Text>
                      </View>

                      <View className="mb-5">
                        {
                          workExperience.map((job, index) => (
                            <View key={index} className="flex flex-row justify-between items-center mb-2">
                              <TextInput onChangeText={(text) => {setWorkExperience(prevArray => prevArray.map((obj, i) => ((i === index) ? {...obj, jobTitle: text} : obj)))}} className="w-[30%] border-2 border-gray-300 rounded-sm px-2"></TextInput>
                              <TextInput onChangeText={(text) => {setWorkExperience(prevArray => prevArray.map((obj, i) => ((i === index) ? {...obj, company: text} : obj)))}} className="w-[30%] border-2 border-gray-300 rounded-sm px-2"></TextInput>
                              <TextInput onChangeText={(text) => {setWorkExperience(prevArray => prevArray.map((obj, i) => ((i === index) ? {...obj, years: text} : obj)))}} className="w-[10%] border-2 border-gray-300 rounded-sm px-2"></TextInput>
                              { 
                                (index !== 0) ? (
                                  <TouchableOpacity onPress={() => {setWorkExperience(prevArray => prevArray.filter((obj, i) => i !== index))}} className="w-[10%] aspect-square">
                                    <Text>✕</Text>
                                  </TouchableOpacity>
                                ) : (
                                  <View className="w-[10%]"></View>
                                )
                              }
                            </View>
                          ))
                        }
                      </View>

                      <View className="flex flex-row justify-between items-center border-[1px] rounded-lg w-[35%] py-1 px-2">
                        <Text className="w-[45%]"></Text>

                        <TouchableOpacity onPress={() => {setWorkExperience([...workExperience, {jobTitle: "", company: "", years: null}])}} className=" flex justify-center items-center border-[1px] rounded-full aspect-square w-[35%]">
                          <Text className="text-2xl font-bold text-green-700 bottom-1">+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <Text className="border-b-[1px] mb-5">Education</Text>
                    <View className="mb-5">
                      <View className="flex flex-row justify-between items-center w-full mb-3">
                        <TouchableOpacity className="w-[45%] bg-gray-200 flex justify-center items-center py-3 rounded-sm"><Text>Highest Degree</Text></TouchableOpacity>
                        
                        <View className="relative flex justify-center items-center w-[45%]">
                          <View pointerEvents="none" className="z-10 w-full h-full absolute">
                            <MotiText
                              state={ fnFocusAnimation } 
                              transition={{
                                type: "timing",
                                delay: 0,
                                duration: 200
                              }} 
                              className={`z-10 absolute px-1`}>Major</MotiText>
                          </View>

                          <TextInput 
                            className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, fn: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, fn: false})}}
                            onChangeText={(text) => {setForm({...form, fn: text})}}
                          />  
                        </View>
                      </View>

                      <View className="flex flex-row justify-between items-center w-full">
                        <View className="relative flex justify-center items-center w-[70%] mb-5">
                          <View pointerEvents="none" className="z-10 w-full h-full absolute">
                            <MotiText
                              state={ telephoneFocusAnimation } 
                            transition={{
                              type: "timing",
                                delay: 0,
                                duration: 200
                            }}
                            pointerEvents="none" 
                            className={`z-10 absolute px-1 `}>School/University</MotiText>
                          </View>

                          <TextInput 
                            keyboardType='numeric'
                            className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                              onFocus={() => {setTextInputFocus({...textInputFocus, telephone: true})}}
                              onBlur={() => {setTextInputFocus({...textInputFocus, telephone: false})}}
                              onChangeText={(text) => {setForm({...form, telephone: text})}}
                          />
                        </View>

                        <View className="relative flex justify-center items-center w-[20%] mb-5">
                          <View pointerEvents="none" className="z-10 w-full h-full absolute">
                            <MotiText
                              state={ telephoneFocusAnimation } 
                            transition={{
                              type: "timing",
                                delay: 0,
                                duration: 200
                            }}
                            pointerEvents="none" 
                            className={`z-10 absolute px-1 `}>Year</MotiText>
                          </View>

                          <TextInput 
                            keyboardType='numeric'
                            className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                              onFocus={() => {setTextInputFocus({...textInputFocus, telephone: true})}}
                              onBlur={() => {setTextInputFocus({...textInputFocus, telephone: false})}}
                              onChangeText={(text) => {setForm({...form, telephone: text})}}
                          />
                        </View>
                      </View>
                    </View>
                    <View className="relative flex justify-center items-center w-full mb-5">
                      <Text className="absolute mb-1">CV</Text>
                      <View className="flex flex-row">
                        <TouchableOpacity onPress={() => {selectDocument()}} className="bg-red-400 flex justify-center items-center rounded-lg p-3 mr-2"><Text className="text-white">Upload 📑</Text></TouchableOpacity>
                        <Text>{CVname.split("DocumentPicker/").slice(1).join("DocumentPicker/")}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ) : (accountType === "Client") ? (
                <View>
                  <View className="w-[100vw] flex flex-col justify-center items-center mb-10">
                    <UploadImage />
                  </View>

                  <View className="px-11">
                    <Text className="border-b-[1px] mb-5">Personal Information</Text>
                    <View>
                      <View className="relative flex justify-center items-center w-full mb-5">
                          <View pointerEvents="none" className="z-10 w-full h-full absolute">
                            <MotiText
                              state={ clientNameFocusAnimation } 
                              transition={{
                                type: "timing",
                                delay: 0,
                                duration: 200
                              }} 
                              className={`z-10 absolute px-1 `}> Client / Company Name</MotiText>
                          </View>

                          <TextInput 
                            className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                              onFocus={() => {setTextInputFocus({...textInputFocus, clientName: true})}}
                              onBlur={() => {setTextInputFocus({...textInputFocus, clientName: false})}}
                              onChangeText={(text) => {setForm({...form, clientName: text})}}
                          />
                        </View>
                        <View className="relative flex justify-center items-center w-full mb-5">
                          <View pointerEvents="none" className="z-10 w-full h-full absolute">
                            <MotiText
                              state={ usernameFocusAnimation } 
                              transition={{
                                type: "timing",
                                delay: 0,
                                duration: 200
                              }} 
                              className={`z-10 absolute px-1 `}> Username</MotiText>
                          </View>

                          <TextInput 
                            className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                              onFocus={() => {setTextInputFocus({...textInputFocus, username: true})}}
                              onBlur={() => {setTextInputFocus({...textInputFocus, username: false})}}
                              onChangeText={(text) => {setForm({...form, username: text})}}
                          />
                        </View>

                        <View className="relative flex justify-center items-center w-full mb-5">
                          <View pointerEvents="none" className="z-10 w-full h-full absolute">
                            <MotiText
                              state={ locationFocusAnimation } 
                              transition={{
                                type: "timing",
                                delay: 0,
                                duration: 200
                              }} 
                              className={`z-10 absolute px-1 `}>Location</MotiText>
                          </View>

                          <TextInput 
                            className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                              onFocus={() => {setTextInputFocus({...textInputFocus, location: true})}}
                              onBlur={() => {setTextInputFocus({...textInputFocus, location: false})}}
                              onChangeText={(text) => {setForm({...form, location: text})}}
                          />
                        </View>
                    </View>

                    <Text className="border-b-[1px] mb-5">Contact Information</Text>
                    <View>
                      <View className="relative flex justify-center items-center w-full mb-5">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText 
                            state={ emailFocusAnimation } 
                            transition={{
                              type: "timing",
                              delay: 0,
                              duration: 200
                            }} 
                            className={`z-10 absolute px-1 `}>E-Mail</MotiText>
                        </View>

                        <TextInput 
                          className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, email: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, email: false})}}
                            onChangeText={(text) => {setForm({...form, email: text})}}
                        />
                      </View>

                      <View className="relative flex justify-center items-center w-full mb-5">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText
                            state={ telephoneFocusAnimation } 
                          transition={{
                            type: "timing",
                              delay: 0,
                              duration: 200
                          }}
                          pointerEvents="none" 
                          className={`z-10 absolute px-1 `}>Telephone</MotiText>
                        </View>

                        <TextInput 
                          keyboardType='numeric'
                          className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, telephone: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, telephone: false})}}
                            onChangeText={(text) => {setForm({...form, telephone: text})}}
                        />
                      </View>

                      <View className="relative flex justify-center items-center w-full mb-5">
                        <View pointerEvents="none" className="z-10 w-full h-full absolute">
                          <MotiText
                            state={ websiteFocusAnimation } 
                          transition={{
                            type: "timing",
                              delay: 0,
                              duration: 200
                          }}
                          pointerEvents="none" 
                          className={`z-10 absolute px-1 `}>Website</MotiText>
                        </View>

                        <TextInput 
                          keyboardType='numeric'
                          className="w-full rounded-md py-3 px-4 border-2 border-gray-300 focus:border-red-300"
                            onFocus={() => {setTextInputFocus({...textInputFocus, website: true})}}
                            onBlur={() => {setTextInputFocus({...textInputFocus, website: false})}}
                            onChangeText={(text) => {setForm({...form, website: text})}}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                null
              )
            }
          </View>

          <View className="w-full flex justify-center items-center mb-10">
            <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-red-400 rounded-sm w-[80%] py-4 flex justify-center items-center">
              <Text className="text-white font-bold text-lg">Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default OnBoarding