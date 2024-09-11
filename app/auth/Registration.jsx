import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";  // Import updateProfile
import { auth } from '@/firebase/Configs';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');  // State to capture name
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile to include displayName
      await updateProfile(user, {
        displayName: name,
      });

      router.replace('/');  // Navigate to home after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View className='mx-10 my-40'>
      <TextInput
        className='p-3 m-5 border-2 border-[#6b6a10] rounded-lg'
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className='p-3 m-5 border-2 border-[#6b6a10] rounded-lg'
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className='p-3 m-5 border-2 border-[#6b6a10] rounded-lg'
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleRegister}>
        <Text
          style={{
            backgroundColor: Colors.primary,
            padding: 15,
            marginHorizontal: 16,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 9,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
