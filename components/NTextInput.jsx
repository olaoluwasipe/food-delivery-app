import { StyleSheet, Text, View, Platform, TextInput, Image } from 'react-native'
import React from 'react'

const NTextInput = ({placeholder= 'Email', icon, inputType='text'}) => {
  return (
    <View style={styles.textinput}>
        {icon && <Image source={icon} width={30} style={{width: 20, height: 20, marginRight: 15}} />}
        <TextInput style={{height: 40, flex: 1, fontSize: 20, }}  placeholder={placeholder} />
    </View>
  )
}

export default NTextInput

const styles = StyleSheet.create({
    
    textinput: {
        width: '100%', // Set your desired width
        height: 60, // Set your desired height
        borderRadius: 15,
        borderColor: '#f4f4f4',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#fff',
        ...Platform.select({
        ios: {
            shadowColor: '#5A6CEA',
            shadowOffset: { width: 12, height: 26 },
            shadowOpacity: 0.7, // Adjust the shadow opacity as needed
            shadowRadius: 50, // Adjust the shadow radius as needed
        },
        android: {
            elevation: 10,
        },
        })
    }

})