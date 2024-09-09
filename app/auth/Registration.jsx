import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";  // Import the function from firebase/auth
import { auth } from '@/firebase/Configs';  // Correct import of your auth object
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setname] = useState('')

  const router=useRouter()
  
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace('/');  // Navigate to home after successful registration
    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <View className='mx-10 my-40' >
              <TextInput className='p-3 m-5 border-2 border-[#6b6a10] rounded-lg '  placeholder="Name" value={name} onChangeText={setname} />

      <TextInput className='p-3 m-5 border-2 border-[#6b6a10] rounded-lg '  placeholder="Email" value={email} onChangeText={setEmail} />

      <TextInput
      className='p-3 m-5 border-2 border-[#6b6a10] rounded-lg ' 
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
            <View className='flex-row gap-2 px-4 py-2' >
            <Text className='text-green-800  font-bold ' >Already Have An Account?</Text> 
      <TouchableOpacity onPress={()=>router.push('/auth/Login')}  >
    <Text className='text-green-800  font-bold '>login</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleRegister} >
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
                        fontSize: 18
                    }}
                >
                    Register
                </Text>
            </TouchableOpacity>

      {/* {error ? <Text>{error}</Text> : null} */}
    </View>
  );
};

export default Register;
