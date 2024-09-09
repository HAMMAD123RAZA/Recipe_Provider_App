import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '@/firebase/Configs';
import Login from './auth/Login'
import Index from './(tabs)/index'
import Header from '../components/Header';
import Slider from '../components/Slider';
import Category from '../components/Category';
import MealList from '../components/MealList';

const App = () => {

  return (
    <View>
    <ScrollView>
    <View>
      <Header />
      <Slider />
      <Category />
      <MealList />
    </View>
    </ScrollView>
    </View>
  )
}

export default App