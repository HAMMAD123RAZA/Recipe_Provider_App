import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const ExploreScreen = () => {
  return (
    <View  >
      <Text className='font-bold text-4xl px-4 pt-9 pb-2' style={{color:Colors.primary}}>Explore</Text>
      <View className='flex-row gap-2 px-5 py-3 m-4 rounded-xl ' style={{borderColor:Colors.primary,borderWidth:4}} >
        <Ionicons name='search' size={26} color={Colors.primary}  />
        <TextInput
            placeholder="Search..."
            placeholderTextColor={Colors.primary}
            className='flex-1'
          />
      </View>
    </View>
  )
}

export default ExploreScreen