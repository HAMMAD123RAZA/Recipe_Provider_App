import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Category from '../../components/Category';
import MealList from '../../components/MealList';
import Login from '../auth/Login';
import { auth } from '@/firebase/Configs';
import Registration from '../auth/Registration';

const Index = () => {
  
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUser(user)
  //     } else {
  //       setUser(null)
  //     }
  //   })
  //   return () => unsubscribe()
  // }, [])

  // if (!user) {
  //   return <Login />
  // }

  return (
    <ScrollView>
    <View>
      <Header />
      <Slider />
      <Category />
      <MealList />
    </View>
    </ScrollView>
  );
};

export default Index;