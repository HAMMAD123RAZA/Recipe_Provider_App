import { View, Text, FlatList ,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import ExploreScreen from '../../components/explore/exploreScreen'
import { collection, getDocs, query } from '@firebase/firestore'
import { db } from '@/firebase/Configs'

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

const renderItem=({item})=>{
    return (
        <View className='' >
              <View className='w-40 m-2 py-2  bg-gray-200' style={{borderRadius:12}} >
        <Image source={{uri:item.img}} width={150} style={{borderRadius:7}} height={120} />
        <Text  className='font-bold pl-3 pt-2 text-xl'>{item.name}</Text>
        <Text className='font-bold text-gray-400 pl-3' >Lorem, ipsum dolor sit amet consectetur </Text>

        {/* <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolorem amet libero vero, et repellendus quasi molestias ea, exercitationem, explicabo error quo suscipit maxime repellat iste illo? Suscipit, pariatur optio?</Text> */}
      </View>

        </View>
    )
}

  return (
    <View>
      <Text>Meals List</Text>
      <FlatList data={data} renderItem={renderItem} contentContainerStyle={{justifyContent:'space-around'}} numColumns={2}  />
    </View>
  )
}

export default ExploreBusinessList