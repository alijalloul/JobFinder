import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

const ScreenHeaderBtn = ({ iconurl, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} className=" w-11 aspect-square">
        <Image 
            source={iconurl}
            resizeMode='cover'
            className={`w-full h-full rounded-full]`}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn