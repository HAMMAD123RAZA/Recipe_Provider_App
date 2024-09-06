import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import img from '../../assets/images/react-logo.png'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import Category from '../../components/Category'


const index = () => {

  return (
    <View>
      <Header/>
      <Slider/>
      <Category/>
    </View>
  )
}

export default index