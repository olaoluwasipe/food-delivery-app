import { StyleSheet, Text, View, ImageBackground, Dimensions, Image } from 'react-native'
import { SafeAreaView } from'react-native-safe-area-context'
import React from 'react'
import TextInput from '../../components/TextInput';

const { width, height } = Dimensions.get('window');

const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: height, width: width, backgroundColor: "#fff" }}> 
        <ImageBackground source={require('../../assets/bg-patt.png')} style={{width: width, height: '100%', padding: 20, flexDirection: 'column', alignItems: 'center'}} >
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image style={{marginVertical: 30}} source={require('../../assets/Logo.png')} ></Image>
                <Text style={{fontSize: 25, color: '#000', textAlign: 'center', fontWeight: 600, marginVertical: 20}}>Sign Up For Free</Text>
            </View>
            <View>
                <TextInput />
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})