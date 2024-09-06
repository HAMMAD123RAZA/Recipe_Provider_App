import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'
import {Colors} from '../../constants/Colors'

const Review = ({item}) => {
  return (
    <View>
      <Text>Review</Text>
      <Rating
  type='star'
  ratingCount={5}
  imageSize={30}
  onFinishRating={this.ratingCompleted}
/>

<View className='px-5 py-3 rounded-lg mx-7 my-3 bg-white  ' >
<TextInput placeholder='Review us here...' />
</View>

{/* btn */}

<TouchableOpacity
                // disabled={!userInput.trim()} 
                style={{
                    // backgroundColor: !userInput.trim() ? Colors.primary : Colors.triple,
                    backgroundColor:Colors.primary,
                    padding: 12,
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