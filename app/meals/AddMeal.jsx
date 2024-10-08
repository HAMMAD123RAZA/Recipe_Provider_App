import RNPickerSelect from 'react-native-picker-select';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {db, storage} from '../../firebase/Configs'
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
import {Colors} from '../../constants/Colors'
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import {  useRouter } from 'expo-router';


const AddMeal = () => {
  const [image, setImage] = useState(null);
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [cat, setcat] = useState([])
  const [selectedCat, setselectedCat] = useState('')

useEffect(()=>{
getCat()
},[])

const  router=useRouter()

  const getCat = async () => {
    const q = query(collection(db, 'category'));
    const snapShot = await getDocs(q);
    const data = snapShot.docs.map((doc) => doc.data());

    const formatData = data.map((item) => ({
        label: item.name,
        value: item.name,
    }));
    setcat(formatData);
};

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onAddMeals=async()=>{
    try {
      const data=await fetch(image)
      const res=await data.blob()
      const fileName=Date.now().toString()+'.jpg'
      const imgRef=ref(storage,'/business'+fileName)
      await uploadBytes(imgRef,res);
      console.log('File uploaded successfully');
      const downimgUrl=await getDownloadURL(imgRef)
      console.log(downimgUrl)
      bussDetail(downimgUrl)
      router.push('/meals/MyMeal')
    } catch (error) {
      console.log(error)
    }
  }

  const bussDetail = async (url) => {
    try {
      console.log({  description, selectedCat,title }); 
      const data = await setDoc(doc(db, 'mealsList', Date.now().toString()), {
        title,
        description,
        img: url,
        category: selectedCat,
      });
      ToastAndroid.show('Recipe Added', ToastAndroid.LONG);
    } catch (error) {
      console.error('Error saving business details:', error);
    }
  };

  return (
    <View className='py-8'>
    <View >
    <Text className=' pt-4 pl-6 text-4xl font-bold ' style={{color:Colors.primary}} >Add Meals</Text>
      <Text className='py-4 text-gray-400 pl-6 text-xl font-bold ' >Fill Out The Form To Add</Text>
    <TouchableOpacity onPress={pickImage} style={{marginHorizontal:24,marginVertical:3}} >
                {!image ? (
                    <Image
                        source={{ uri: 'https://i.pinimg.com/originals/41/d3/ff/41d3ffd56e5d6968a393ece81b20f428.jpg'  }}
                        style={{ width: 90, height: 80 ,borderRadius:12 }}
                    />
                ) : (
                    <Image source={{ uri: image }} style={{ width: 80, height: 80 }} />
                )}
            </TouchableOpacity>

<View className='p-5 m-5  border-[#6b6a10] rounded-lg '  style={{borderWidth:3}}>
<TextInput value={title} onChangeText={settitle} placeholder='Title' />

</View>
<View className='p-5 m-5  border-[#6b6a10] rounded-lg '  style={{borderWidth:3}}>
<TextInput multiline numberOfLines={4} style={{textAlignVertical:'top'}} value={description} onChangeText={setdescription} placeholder='Description' />

</View>

<RNPickerSelect
      onValueChange={(value) => setselectedCat(value)}
      items={cat}
    />

<TouchableOpacity onPress={()=>onAddMeals()} >
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
                    Submit
                </Text>
            </TouchableOpacity>


        </View>

    </View>
  )
}

export default AddMeal