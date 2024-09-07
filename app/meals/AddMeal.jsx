import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';



const AddMeal = () => {
  const [image, setImage] = useState(null);

  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
    <View >
    <TouchableOpacity onPress={pickImage}>
                {!image ? (
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/d0/18/6b/d0186b1f7911d168d442d1a888ca2bb6.jpg' }}
                        style={{ width: 80, height: 70 }}
                    />
                ) : (
                    <Image source={{ uri: image }} style={{ width: 80, height: 70 }} />
                )}
            </TouchableOpacity>

    </View>

    </View>
  )
}

export default AddMeal