import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'

const Button = ({text, style}) => {
  return (
    <TouchableOpacity style={style}>
        <LinearGradient
            colors={['#53E88B','#15BE77']}
            style={{ paddingVertical: 20, paddingHorizontal: 40, alignItems: 'center', borderRadius: 5 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            >
            <Text style={{fontSize: 20, color: '#fff', fontWeight: 600}}>{text}</Text>
        </LinearGradient>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {

    }
})