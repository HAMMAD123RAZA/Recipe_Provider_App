import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/Configs';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');

  const router = useRouter();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace('/')
      // Authentication state will automatically redirect based on user state in RootLayout
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View className='mx-10 my-40'>
      <TextInput className='p-3 m-5 border-2 border-[#6b6a10] rounded-lg' placeholder="Name" value={name} onChangeText={setName} />
      <TextInput className='p-3 m-5 border-2 border-[#6b6a10] rounded-lg' placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput className='p-3 m-5 border-2 border-[#6b6a10] rounded-lg' placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <View className='flex-row gap-2 px-4 py-2'>
        <Text className='text-green-800 font-bold'>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/auth/Login')}>
          <Text className='text-green-800 font-bold'>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={{ backgroundColor: Colors.primary, padding: 15, marginHorizontal: 16, borderRadius: 5, alignItems: 'center', marginTop: 9, textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>
          Register
        </Text>
      </TouchableOpacity>

      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Register;
