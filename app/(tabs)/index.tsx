import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import Category from '../../components/Category'
import MealList from '../../components/MealList'

const index = () => {

  return (
    <View>
      <ScrollView>

      <Header/>
      <Slider/>
      <Category/>
      <MealList/>
       </ScrollView>

    </View>
  )
}

export default index