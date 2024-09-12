import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'
import {Colors} from '../../constants/Colors'

const Review = ({item}) => {
  return (
    <View>
      <Text className='font-bold text-2xl px-4 pt-3' style={{color:Colors.primary}}  >Review</Text>
      <Rating
  type='star'
  ratingCount={5}
  imageSize={30}
  onFinishRating={this.ratingCompleted}
/>

<View className='px-4 py-3 rounded-lg mx-4 my-3 bg-white  ' >
<TextInput style={{textAlignVertical:'top'}} numberOfLines={5} multiline placeholder='Review us here...' />
</View>

{/* btn */}

<TouchableOpacity
                style={{
                    backgroundColor:Colors.primary,
                    padding: 17,
                    marginHorizontal: 9,
                    borderRadius: 5,
                    alignItems: 'center',
                }}
            >
                <Text style={{ color: 'white' }}>Submit</Text>
</TouchableOpacity>

    </View>
  )
}

export default Review