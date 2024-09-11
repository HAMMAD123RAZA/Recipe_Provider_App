import { View, Text, FlatList, TouchableOpacity, Image, Share } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { auth, signOut } from 'firebase/auth'  // Correct import
import { Colors } from '../../constants/Colors'

const Menu = () => {
  const router = useRouter()

  const menuList = [
    {
      id: 1,
      name: 'Add Meals',
      img: 'https://cdn-icons-png.flaticon.com/128/10008/10008895.png',
      path: '/meals/AddMeal',
    },
    {
      id: 2,
      name: 'My Meals',
      img: 'https://cdn-icons-png.flaticon.com/128/2918/2918221.png',
      path: '/meals/MyMeal',
    },
    {
      id: 3,
      name: 'Share',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sharethis-grey.svg/1200px-Sharethis-grey.svg.png',
      path: 'Share',
    },
    {
      id: 4,
      name: 'Logout',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzb0isKrH1Qupd76CKUkvE3qnGuR1SLRHOw&s',
      path: 'Logout',
    },
  ]

  const handleNav = async (item) => {
    if (item.path === 'Share') {
      try {
        await Share.share({
          message: 'Share Wherever you want',
        });
      } catch (error) {
        console.error('Error sharing:', error.message);
      }
      return; // No navigation for Share action
    }

    if (item.path === 'Logout') {
      try {
        await signOut(auth);  
        router.replace('/auth/Login');  
      } catch (error) {
        console.error('Error signing out:', error.message);
      }
      return; 
    }

    router.push(item.path); // For other menu options, navigate as expected
  }

  const renderItem = ({ item }) => {
    return (
      <View className="flex-1 p-4">
        <TouchableOpacity
          onPress={() => handleNav(item)}
          className="items-center"
        >
          <Image
            source={{ uri: item.img }}
            className="w-20 h-20 mb-2 rounded-lg"
          />
          <Text className="text-center text-base font-medium">{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={menuList}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        renderItem={renderItem}
      />
    </View>
  )
}

export default Menu;
