import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query } from '@firebase/firestore'
import { db } from '../firebase/Configs'
import MealsCard from './MealsCard'
import { Colors } from '@/constants/Colors'
import { Link } from 'expo-router'

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
      <View className="flex-row justify-between ">
       <Text className='py-1 text-2xl font-bold px-4 ' style={{color:Colors.primary}} >Meals List</Text>
    <Link href='/meals/MyMeal' className='py-1 text-2xl font-bold px-4 text-gray-400' >View All</Link> 
       </View>
      <FlatList data={data} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default MealList