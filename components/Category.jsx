import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {db} from '../firebase/Configs'
import {collection, getDocs, query} from 'firebase/firestore'
import { useRouter } from 'expo-router'

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
        <View className='px-5 py-2' >
            <TouchableOpacity onPress={()=>router.push('/category/'+item.name)} >
        <Image source={{uri:item.img}} width={90} height={80}  />
        <Text className='px-2 pt-3' >{item.name}</Text>
        </TouchableOpacity>
        </View>
    )
}


  return (
    <View className='py-2'>
       <Text className='py-1 text-2xl font-bold px-4 ' >Category</Text>
      <FlatList data={cat} horizontal showsHorizontalScrollIndicator={false} renderItem={renderItem} />
    </View>
  )
}

export default Category