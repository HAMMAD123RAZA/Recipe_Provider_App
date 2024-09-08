import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from '@firebase/firestore'
import { db } from '../firebase/Configs'
import MealsCard from './MealsCard'

const MealList = () => {
    const [data, setdata] = useState()

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        try {
            const q=query(collection(db,'mealsList'))
            const snap=await getDocs(q)
            const data=snap.docs.map((doc)=>({id:doc.id,...doc.data()}))
            setdata(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }   
    }

    const renderItem=({item})=>{
        return (
            <View>
                <MealsCard item={item} />
            </View>
        )
    }

  return (
    <View>
      <Text className=' py-1 px-4 text-2xl font-bold '>MealList</Text>
      <FlatList data={data} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default MealList