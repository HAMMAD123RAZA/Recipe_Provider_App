import { View, Text } from 'react-native'
import React from 'react'
import UserInfo from '../../components/profile/UserInfo'
import Menu from '../../components/profile/Menu'
import { Colors } from '../../constants/Colors'

const Profile = () => {
  return (
    <View>
<UserInfo/>
<Menu/>
<View className='mt-8' >
  <Text style={{color:Colors.primary}}  className='text-center font-bold  text-xl ' >Developed By
     <Text  className=' text-gray-400' > Hammad Raza</Text>
  </Text>
</View>
    </View>
  )
}

export default Profile