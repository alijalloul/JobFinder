import { Text, SafeAreaView, Button, TouchableOpacity, ScrollView, View, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Welcome from "../components/Welcome";

import { icons } from "../constants";

const Home = ({navigation}) => {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex-1 p-4">
                    <Welcome />
                </View>
            </ScrollView>
        </SafeAreaView>
      
    )
};

export default Home;