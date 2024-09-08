import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const CategoryCard = ({item}) => {
    const router=useRouter()
  return (
    <View className='rounded-lg bg-gray-200 m-4' >
  <TouchableOpacity onPress={()=>router.push('/detailPost/'+item?.id)} >
    <View className='flex-row gap-4 p-2'  >
        <View>
        <Image style={{borderRadius:12}} source={{uri:item.img}} width={120} height={130} />

        </View>
        <View  className='flex-1 pl-4 ' >
        <Text className='font-bold pt-1' >{item.category}</Text>
        <Text  className='pt-1' >{item.description}</Text>
            <Text className='pt-1' >{item.title}</Text>
            <View className='flex-row gap-1 items-center pt-1' >
            <Ionicons name="star" color='orange' size={22} />
            <Text>4.5</Text>

            </View>
        </View>
    </View>
    </TouchableOpacity>  

              </View>
  )
}

export default CategoryCard