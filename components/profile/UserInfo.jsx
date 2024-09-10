import { View, Text, Image } from 'react-native'
import React from 'react'

const UserInfo = () => {
  return (
    <View className=' my-20'  style={{marginLeft:100}} >

<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VQvuRo4SyQr1uhvdXwmgJYYX5pj7Yr_qcw&s'}}
      style={{borderRadius:112}}
      width={110} height={110} />
      <Text className='font-bold py-2' >Hammad Raza</Text>
      <Text className='py-2' >01hammadraza@gmail.com</Text>
          </View>
  )
}

export default UserInfo