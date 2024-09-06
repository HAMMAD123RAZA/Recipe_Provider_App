import { View, Text, Image } from 'react-native'
import React from 'react'

const DocInfor = ({ item }) => {
  if (!item) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      {item.img ? (
        <Image source={{ uri: item.img }} style={{ width: 200, height: 140 }} />
      ) : (
        <Text>Image not available</Text>
      )}
      {item.name ? (
        <Text>{item.name}</Text>
      ) : (
        <Text>Name not available</Text>
      )}
      {item.title ? (
        <Text>{item.title}</Text>
      ) : (
        <Text>Title not available</Text>
      )}
    </View>
  )
}

export default DocInfor
