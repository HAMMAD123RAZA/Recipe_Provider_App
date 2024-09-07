import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {db} from '../../firebase/Configs'
import { collection, getDocs, query } from '@firebase/firestore'
import MealsCard from '../../components/MealsCard'
const MyMeal = () => {
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
    <Text className='font-bold text-xl'>MealList</Text>
    <FlatList data={data} renderItem={renderItem} />
  </View>
)
}

export default MyMeal