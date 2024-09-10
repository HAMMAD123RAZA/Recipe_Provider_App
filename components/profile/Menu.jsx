import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import {Colors} from '../../constants/Colors'

const Menu = () => {

    const router=useRouter()

    const menuList=[
        {
            id:1,
            name:'Add Meals',
            img:'https://cdn-icons-png.flaticon.com/128/10008/10008895.png',
            path:'/meals/AddMeal'
        },
        {
            id:2,
            name:'My Meals',
            img:'https://cdn-icons-png.flaticon.com/128/2918/2918221.png',
            path:'/meals/MyMeal'
        },{
            id:3,
            name:'Share',
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sharethis-grey.svg/1200px-Sharethis-grey.svg.png',
            path:'Share'
        },{
            id:4,
            name:'Logout',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzb0isKrH1Qupd76CKUkvE3qnGuR1SLRHOw&s',
            path:'/'
        },
    ]

    const renderItem = ({ item }) => {
        return (
            <View className="flex-1 p-4">
                <TouchableOpacity onPress={() => router.push(item.path)} className="items-center">
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
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 8 }}
                renderItem={renderItem}
            />
                </View>
  )
}

export default Menu