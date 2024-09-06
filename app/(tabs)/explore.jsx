import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ExploreScreen from '../../components/explore/ExploreScreen'
import { collection, getDocs, query } from '@firebase/firestore'
import { db } from '@/firebase/Configs'
import ExploreBusinessList from '../../components/explore/ExploreBusinessList'


const explore = () => {
  return (
    <View>
      <ExploreScreen/>
      <ExploreBusinessList/>
    </View>
  )
}

export default explore