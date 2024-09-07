import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { collection, getDocs, query, where } from '@firebase/firestore'
import {db} from '../../firebase/Configs'


const CatId = () => {
    const {CatId}=useLocalSearchParams()
    const [elements, setelements] = useState()

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        try {
            const q=query(collection(db,'mealsList'),where('category','==',CatId))
            const qSnapShot=await getDocs(q)
            const data = qSnapShot.docs.map((doc) =>({id:doc.id, ...doc.data()}));
            setelements(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

const router=useRouter()

    const renderItem=({item})=>{
        return (
            <TouchableOpacity onPress={()=>router.push('/detailPost/'+item?.id)} >
            <Image source={{uri:item.img}} width={80} height={70} />
            <Text>{item.category}</Text>
            <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    }

  return (
    <View>
      <FlatList renderItem={renderItem} data={elements}  />
    </View>
  )
}

export default CatId