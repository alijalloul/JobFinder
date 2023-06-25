import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, ScrollView } from 'react-native';

const SearchMultiChoiceButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const jobs = ['delivery driver', 'chef', 'web developer', 'accountant', 'cashier', 'sound engineer'];

  return (
    <View>
      <TouchableOpacity
        className={`${isPressed ? "hidden" : "visible"} border-2 rounded-lg px-10 py-3`}
        onPress={() => {setIsPressed(true)}}
      >
        <Text>Add</Text>
      </TouchableOpacity>

      <View className={`${isPressed ? "flex" : "hidden"}`}>
        <View className={`flex-row px-10 py-3 border-2 border-gray-300 rounded-lg rounded-b-none`}>
          <TextInput className="w-[90%]" />
          <TouchableOpacity onPress={() => {setIsPressed(false)}} className="rounded-full bg-gray-200 aspect-square flex justify-center items-center overflow-visible">
            <Text>✕</Text>
          </TouchableOpacity>
        </View>

        <View className="h-24">
          <ScrollView style={{ maxHeight: 20 }}>
            <View>
              {jobs.map((job, index) => (
                <View key={index} className="py-3 w-full border-2 border-gray-200">
                  <TouchableOpacity>
                    <Text>{job}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SearchMultiChoiceButton;
