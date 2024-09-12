import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { collection, getDocs, query, where } from '@firebase/firestore'
import {db} from '../../firebase/Configs'
import CategoryCard from '../../components/CategoryCard'
import { Colors} from '../../constants/Colors'

const CatId = () => {
    const {CatId}=useLocalSearchParams()
    const [elements, setelements] = useState()
  // const [loading, setloading] = useState(false)

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        try {
          // setloading(true)
            const q=query(collection(db,'mealsList'),where('category','==',CatId))
            const qSnapShot=await getDocs(q)
            const data = qSnapShot.docs.map((doc) =>({id:doc.id, ...doc.data()}));
            setelements(data)
            // setloading(false)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    // if (loading) {
    //   return (
    //       <View>
    //       <ActivityIndicator color={Colors.primary} size={32} />
  
    //       </View>
    //   )
    // }
  

const router=useRouter()

    const renderItem=({item})=>{
        return (
          <CategoryCard item={item} />
        )
    }

  return (
    <View className='my-5' >
      <FlatList renderItem={renderItem} data={elements}  />
    </View>
  )
}

export default CatId