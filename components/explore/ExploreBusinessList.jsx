import { View, Text, FlatList ,Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from '@firebase/firestore'
import { db } from '@/firebase/Configs'
import { useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'

const ExploreBusinessList = () => {

    const [data, setdata] = useState()

useEffect(()=>{
  getData()
},[])

  const getData=async()=>{
    try {
      const q=query(collection(db,'mealsList'))
      const qSnapShot=await getDocs(q)
      const data=qSnapShot.docs.map((doc)=>({id:doc.id,...doc.data()}))
      setdata(data)
    } catch (error) {
      console.log(error)
    }
  }

const router=useRouter()
const renderItem=({item})=>{

    return (
      <TouchableOpacity  className='' onPress={()=>router.push('/detailPost/'+item?.id)} >
              <View className='w-40 m-2   bg-gray-200' style={{borderRadius:12,borderColor:Colors.primary,borderWidth:1}} >
        <Image source={{uri:item.img}} width={150} style={{borderRadius:7,marginHorizontal:3,marginVertical:4}}  height={120} />
        <Text  className='font-bold pl-3 pt-1 text-xl'>{item.title}</Text>
        <Text  className='font-bold pl-3 pt-1 text-xl'>{item.name}</Text>

        <Text className='font-bold text-gray-400 pl-3' >Lorem, ipsum dolor sit amet consectetur </Text>

        {/* <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolorem amet libero vero, et repellendus quasi molestias ea, exercitationem, explicabo error quo suscipit maxime repellat iste illo? Suscipit, pariatur optio?</Text> */}

        </View>
        </TouchableOpacity>
    )
}

  return (
    <View className='' >
      <Text className=' py-4 px-4 text-4xl font-bold ' style={{color:Colors.primary}} >MealList</Text>
      <FlatList data={data} renderItem={renderItem} contentContainerStyle={{justifyContent:'space-around'}} numColumns={2}  />

    </View>
  )
}

export default ExploreBusinessList