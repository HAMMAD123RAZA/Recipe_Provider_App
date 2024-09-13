import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc } from '@firebase/firestore'
import { db } from '../../firebase/Configs'
import { render } from 'react-native-web'
import DocInfor from '../../components/detailPost/DocInfor'
import MenuIcons from '../../components/detailPost/Review'
import { Colors } from '../../constants/Colors'

const DetPost = () => {
const {DetPost}=useLocalSearchParams()
const [data, setdata] = useState()

useEffect(()=>{
    getData()
},[])

const getData=async()=>{
    try {
        const info=doc(db,'mealsList',DetPost)
        const infoSnap=await getDoc(info)
        if(infoSnap.exists()){
            const data=infoSnap.data()
            // console.log('infoData',data)
            setdata(data)
        }
        else{
            console.log('no documents found:')
        }
    } catch (error) {
        console.log(error)
    }
}

  return (
    <View>
      {/* <Text>{DetPost}</Text> */}
      <DocInfor item={data}  />
      <MenuIcons item={data} />
      <View className='mt-8' >
  <Text style={{color:Colors.primary}}  className='text-center font-bold  text-xl ' >Developed By
     <Text  className=' text-gray-400' > Hammad Raza</Text>
  </Text>
</View>

    </View>
  )
}

export default DetPost