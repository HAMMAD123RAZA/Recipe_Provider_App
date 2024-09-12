import React, { useState, useEffect } from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/Configs';
import Login from '../auth/Login';
import { ActivityIndicator, View } from 'react-native';

export default function TabLayout() {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {    
    return  (
<View className='my-20' >
      <ActivityIndicator size={80}  color={Colors.primary} />
      </View>
    )
  }

  if (!user) {
    return <Login />;  
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'white',
        tabBarActiveBackgroundColor:Colors.primary,
        headerShown: false,
      tabBarInactiveBackgroundColor:Colors.primary,

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons size={32} name={focused ? 'home' : 'home-outline'} color='white'/>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => (
            <Ionicons size={32} name='people' color='white'/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: () => (
            <Ionicons size={32} name='search' color='white'/>
          ),
        }}
      />
    </Tabs>
  );
}
