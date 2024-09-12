import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {db} from '../firebase/Configs'
import {collection, getDocs, query} from 'firebase/firestore'
import { useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'

const Category = () => {
    const [cat, setcat] = useState([])

    useEffect(()=>{
      getData()
    },[])

  const getData=async()=>{
    try {
      const q=query(collection(db,'category'))
      const qSnapShot=await getDocs(q)
      const data=qSnapShot.docs.map((doc)=>doc.data())
      // console.log(data)
      setcat(data)
  
    } catch (error) {
      console.log(error)
    }
  }

  const router=useRouter()
  
  const renderItem=({item})=>{
    return (
        <View className='px-5 py-2 '  >
            <TouchableOpacity onPress={()=>router.push('/category/'+item.name)} >
        <Image style={{borderRadius:24}}  source={{uri:item.img}} width={90} height={80}  />
        <Text className='px-2 font-bold pt-3' style={{color:Colors.primary}} >{item.name}</Text>
        </TouchableOpacity>
        </View>
    )
}

  return (
    <View className='py-4'>
      <View className="flex-row justify-between py-2 ">
       <Text className='py-1 text-2xl font-bold px-4 ' style={{color:Colors.primary}} >Category</Text>
       <Text className='py-1 text-2xl font-bold px-4 text-gray-400'  >View All</Text>
       </View>
      <FlatList data={cat} horizontal showsHorizontalScrollIndicator={false} renderItem={renderItem} />
    </View>
  )
}

export default Category