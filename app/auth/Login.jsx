import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/Configs';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <View>
    <Text className=' pt-16 text-center text-4xl font-bold ' style={{color:Colors.primary}} >YOUR RECIPE</Text>

    <View className='mx-10 my-10'>
      
      <TextInput className='p-5 m-5 border-4 border-[#6b6a10] rounded-lg' placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput className='p-5 m-5 border-4 border-[#6b6a10] rounded-lg' placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      
      <View className='flex-row gap-2 px-4 py-2'>
        <Text className='text-green-800 font-bold px-2'>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/auth/Registration')}>
          <Text className='text-green-800 font-bold'>Register</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={{ backgroundColor: Colors.primary, padding: 15, marginHorizontal: 16, borderRadius: 5, alignItems: 'center', marginTop: 9, textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>
          Login
        </Text>
      </TouchableOpacity>

      {error ? <Text>{error}</Text> : null}
    </View>
    </View>
  );
};

export default Login;
