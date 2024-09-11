import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Slider = () => {

    const data=[
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl16rkZ77uZBbI-AXXA1ZRFQ8GF9UMkB5GlQ&s'
        },{
            url:'https://www.deliciouslycleaneats.com.au/wp-content/uploads/2018/08/Meal-Plan-Spread1.jpg'
        },
        {
            url:'https://kouroshfoods.com/wp-content/uploads/2023/04/1.jpeg'
        },
        {
            url:'https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg'
        },
        {
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMkBbQ_DxYAZu4rfOP4BgYo9NPektkMPob7Q&s'
        }
    ]

    const renderItem=({item})=>{
        return (
            <View className=' mx-4' >
            <Image style={{borderRadius:14}}  source={{uri:item.url}} width={150} height={90}  />
            </View>
        )
    }

  return (
    <View className='py-2' >
      <Text className='py-3 text-2xl font-bold px-4 ' style={{color:Colors.primary}} >Slider</Text>
      <FlatList data={data} horizontal  renderItem={renderItem} showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default Slider