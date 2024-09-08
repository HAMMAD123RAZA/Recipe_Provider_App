import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { collection, getDocs, query, where } from '@firebase/firestore'
import {db} from '../../firebase/Configs'
import CategoryCard from '../../components/CategoryCard'


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
          <CategoryCard item={item} />
        )
    }

  return (
    <View>
      <FlatList renderItem={renderItem} data={elements}  />
    </View>
  )
}

export default CatId