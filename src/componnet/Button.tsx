import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const ButtonClick = (props: any) => {
    const { title, width, height, onPress } = props;
    return (
        <TouchableOpacity className={`w-[${width}px] h-[${height}px] my-2 mx-4`} onPress={() => onPress()}>
            <LinearGradient
                className='items-center px-4 py-3 rounded-[10px]'
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#ef709b', '#fa9372']}
            >
                <Text className='text-white '>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}


export default ButtonClick 