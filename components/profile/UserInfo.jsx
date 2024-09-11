import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth } from '@/firebase/Configs';  
import {Colors} from '../../constants/Colors'

const UserInfo = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || 'User Name');  
      setUserEmail(user.email || 'user@example.com');  
    }
  }, []);

  return (
    <View className='my-14' style={{ marginLeft: 100 }}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VQvuRo4SyQr1uhvdXwmgJYYX5pj7Yr_qcw&s' }}
        style={{ borderRadius: 112 ,marginLeft:11}}
        width={120} height={120}
      />
      <View className=' pt-2' >

      <Text className='pl-8 text-xl font-bold py-2' style={{color:Colors.primary}} >{userName}</Text>
      <Text className='py-2 pl-3 '>{userEmail}</Text>
    </View>
    </View>

  );
};

export default UserInfo;
