import React, { useState, useEffect } from 'react';
import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/Configs';
import Login from '../auth/Login';
import { ActivityIndicator } from 'react-native';

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
    return <ActivityIndicator size="large"  color={Colors.primary} />;  
  }

  if (!user) {
    return <Login />;  // If the user is not authenticated, show Login
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons size={32} name={focused ? 'home' : 'home-outline'} color={Colors.primary} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => (
            <Ionicons size={32} name='people' color={Colors.primary} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: () => (
            <Ionicons size={32} name='search' color={Colors.primary} />
          ),
        }}
      />
    </Tabs>
  );
}
