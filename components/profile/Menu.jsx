import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Menu = () => {

    const router=useRouter()

    const menuList=[
        {
            id:1,
            name:'Add Business',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNT0vnAaKYOLSEyBm9nXwSDCLwcLRJi7R9R-hagOBq0lOzQ3ByUjeMIBFnrA&s',
            path:'/meals/AddMeal'
        },
        {
            id:2,
            name:'My Business',
            img:'https://cdn4.iconfinder.com/data/icons/flatastic-11-1/256/user-orange-512.png',
            path:'/meals/MyMeal'
        },{
            id:3,
            name:'Share',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebhPOdB5_6DUboJ-cgJK-YmFJydgmksudi3c13c2KtELiZw5yvfhlnsiEoQ&s',
            path:'Share'
        },{
            id:4,
            name:'Logout',
            img:'https://www.iconsdb.com/icons/preview/orange/logout-xxl.png',
            path:''
        },
    ]

    const renderItem=({item})=>{
        return (
            <View className='flex-row justify-between px-9' >
                <TouchableOpacity onPress={()=>router.push(item.path)} >
                    <Image source={{uri:item.img}} width={50} height={50}  />
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

  return (
    <View>
        <FlatList numColumns={2} data={menuList} contentContainerStyle={{justifyContent:'space-around'}} renderItem={renderItem} />
    </View>
  )
}

export default Menu