import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import Category from '../../components/Category'
import MealList from '../../components/MealList'

const index = () => {

  return (
    <View>
      <Header/>
      <Slider/>
      <Category/>
      <MealList/>
    </View>
  )
}

export default index