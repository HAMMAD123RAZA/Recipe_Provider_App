import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth } from '@/firebase/Configs';  // Make sure you have correct Firebase auth import

const UserInfo = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || 'User Name')
      setUserEmail(user.email || 'user@example.com');
    }
  }, []);

  return (
    <View className='my-20' style={{ marginLeft: 100 }}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VQvuRo4SyQr1uhvdXwmgJYYX5pj7Yr_qcw&s' }}
        style={{ borderRadius: 112 }}
        width={110} height={110}
      />
      <Text className='font-bold py-2'>{userName}</Text>
      <Text className='py-2'>{userEmail}</Text>
    </View>
  );
};

export default UserInfo;
