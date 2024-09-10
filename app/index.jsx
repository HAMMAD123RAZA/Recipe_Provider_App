// import { View, Text, ScrollView } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { auth } from '@/firebase/Configs'
// import Login from './auth/Login'
// import Index from './(tabs)/index'
// import Header from '../components/Header'
// import Slider from '../components/Slider'
// import Category from '../components/Category'
// import MealList from '../components/MealList'

// const App = () => {
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user)
//       } else {
//         setUser(null)
//       }
//     })
//     return () => unsubscribe()
//   }, [])


//   if (!user) {
//     return <Login />
//   }

//   return (
//     <View>
//       <Index />
//     </View>
//   )
// }

// export default App