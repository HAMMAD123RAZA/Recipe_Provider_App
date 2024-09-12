import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/Colors'

const MealsCard = ({item}) => {

    const router=useRouter()

  return (
    <TouchableOpacity style={{borderColor:Colors.primary,borderWidth:1}}  onPress={()=>router.push('/detailPost/'+item.id)} className="bg-gray-200 p-3 m-4 w-72 mb-4 rounded-lg">
      <View className="flex-row gap-3">
        <Image
          source={{ uri: item.img }}
          className="rounded-lg"
          style={{ width: 100, height: 130,borderColor:Colors.primary,borderWidth:3 }}
        />
        <View className="flex-1">
          <Text className="pt-1 font-semibold text-lg">{item.title}</Text>
          <Text className="text-gray-600 flex-shrink" numberOfLines={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            dolore ab accusamus eius maxime porro.
          </Text>
          <View className='flex-row justify-between' >
          <View className="flex-row items-center gap-1">
            <Ionicons name="star" color='orange' size={22} />
            <Text>4.5</Text>
          </View>
    <Text className='px-2 mt-2 py-1  text-white font-bold  rounded-md' style={{backgroundColor:Colors.primary}}  >{item.category}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MealsCard