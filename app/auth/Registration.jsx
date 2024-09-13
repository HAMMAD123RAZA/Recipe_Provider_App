import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '@/firebase/Configs';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

      router.replace('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  // Avoid keyboard overlap
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className='h-full' style={{ backgroundColor: Colors.primary }}>
          <View className='mx-20 pt-6'>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOZMkQV4Mb6VMHqIknnZdvriMOBetKD-a_w&s' }}
              borderRadius={100}
              width={200}
              height={190}
            />
          </View>

          <Text className='pt-4 mx-24 text-4xl font-bold' style={{ color: 'white' }}>
            Welcome!
          </Text>
          <Text className='pt-4 text-center text-3xl font-bold' style={{ color: 'white' }}>
            Explore Recipes
          </Text>

          <View className='mx-10 my-4'>
            <TextInput
              placeholderTextColor='white'
              className='p-3 m-3 border-4 border-white rounded-lg'
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholderTextColor='white'
              className='p-3 m-3 border-4 border-white rounded-lg'
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              placeholderTextColor='white'
              className='p-3 m-3 border-4 border-white rounded-lg'
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View className='flex-row gap-2 px-4 py-2'>
              <Text className='text-white font-bold px-2'>Already have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/auth/Login')}>
                <Text className='text-white font-bold'>Login</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleRegister}>
              <Text
                style={{
                  backgroundColor: 'white',
                  padding: 14,
                  marginHorizontal: 8,
                  borderRadius: 45,
                  alignItems: 'center',
                  marginTop: 12,
                  textAlign: 'center',
                  color: Colors.primary,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}
              >
                Register
              </Text>
            </TouchableOpacity>

            {error ? <Text className='text-white pt-3 text-center'>{error}</Text> : null}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
