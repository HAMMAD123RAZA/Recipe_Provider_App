import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import img from '../assets/images/react-logo.png'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={{backgroundColor:Colors.primary,borderBottomEndRadius:32,borderBottomLeftRadius:32}}  >
    <View className='flex-row gap-3 '  >
      <Image source={img} width={40} height={30}/>
      <View className='pt-5  ' >
      <Text className='' >Welcome</Text>
      <Text>To Recipes</Text>
      </View>

    </View>
          <View className="bg-gray-200 px-5 mx-5 my-8 pt-1 rounded-md flex-row items-center">
          <Ionicons name="search" size={22} color="black" />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="gray"
            className="flex-1 py-3 ml-2 text-black"
          />
        </View>
        </View>
  )
}

export default Header