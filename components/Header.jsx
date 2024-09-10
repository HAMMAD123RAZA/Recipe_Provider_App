import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import img from '../assets/images/react-logo.png'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={{backgroundColor:Colors.primary,borderBottomEndRadius:32,borderBottomLeftRadius:32}}  >
    <View className='flex-row gap-3 pt-2 px-5'  >
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOZMkQV4Mb6VMHqIknnZdvriMOBetKD-a_w&s'}} borderRadius={22}  width={80} height={70}/>
      <View className='pt-2 ' >
      <Text className='text-gray-200 font-bold text-xl ' >Welcome</Text>
      <Text className='text-gray-200 font-bold text-xl ' >To Recipes</Text>
      </View>

    </View>
          <View className="bg-gray-200 px-5 mx-5 my-8 pt-1 rounded-xl flex-row items-center">
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