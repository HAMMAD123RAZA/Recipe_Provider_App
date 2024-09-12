import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const DocInfor = ({ item }) => {
  const {width}=Dimensions.get('window')
  const router=useRouter()
  return (
    <View>

      <View className='relative' >
      <Image source={{ uri: item?.img }} style={{ width: width, height: 230 }} />
      <View className='flex-row justify-between absolute w-full p-4' >
        <TouchableOpacity onPress={()=>router.back(/category/)} >
        <Ionicons size={34} color={Colors.primary} name="arrow-undo-circle-outline" />
        </TouchableOpacity>
 <Ionicons name="heart" color={Colors.primary} size={34} />

      </View  >

      </View>
      <View className='bg-gray-200 rounded-md px-3  ' style={{borderTopLeftRadius:12,borderTopRightRadius:14}} > 

<Text className='font-bold my-2 text-2xl' style={{color:Colors.primary}}   >{item?.category}</Text>
<Text className='font-bold my-2 text-2xl' style={{color:Colors.primary}} >{item?.title}</Text>
<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum alias ut amet accusantium ex, possimus sunt quam ratione in perferendis quos repellat optio debitis! Laborum reprehenderit non reiciendis exercitationem.quam ratione in perferendis quos repellat optio debitis! Laborum reprehenderit non reiciendis exercitationem.</Text>
</View>

    </View>
  )
}

export default DocInfor
