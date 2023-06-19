import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {
  const [image, setImage] = useState(null);

    const addImage = async () => {
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1,
        });

    if (!_image.canceled) {
      setImage(_image.uri);
    }
  };

    return (
            <View className=" w-48 h-48 bg-[#efefef] relative rounded-full overflow-hidden">
                {
                    image  && <Image source={{ uri: image }} className=" w-full h-full" />
                }
                    <View className=" opacity-70 absolute right-0 bottom-0 bg-gray-50 w-full h-[25%]">
                        <TouchableOpacity onPress={addImage} className="flex items-center justify-center">
                            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                            <AntDesign name="camera" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
            </View>
  );
}