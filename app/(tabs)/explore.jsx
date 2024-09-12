import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ExploreScreen from '../../components/explore/ExploreScreen'
import { collection, getDocs, query } from '@firebase/firestore'
import { db } from '@/firebase/Configs'
import ExploreBusinessList from '../../components/explore/ExploreBusinessList'
import { Colors } from '../../constants/Colors'


const explore = () => {
  const [loading, setloading] = useState(false)

  if (loading) {
    return (
        <View className='my-40' >
        <ActivityIndicator color={Colors.primary} size={100} />

        </View>
    )
  }
    return (
    <View>
      <ExploreScreen/>
      <ExploreBusinessList/>
    </View>
  )
}

export default explore