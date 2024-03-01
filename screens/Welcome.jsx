import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';


const { width, height } = Dimensions.get('window');
// import { Container } from './styles';

const Welcome = () => {
  return <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: height, width: width }}>
    <View>
        <Image source={require('../assets/onboarding1.png')} />
        <View style={{width: Math.round(width/1.3), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: 10}}>
            <Text style={{fontSize: 35, color:'#000', textAlign: 'center', fontWeight: 600}}>Find Your Comfort Food Here</Text>
            <Text style={{marginTop: 20, textAlign: 'center', fontSize: 18, }}>Here you can find a chef or a dish for every taste and color. Enjoy!</Text>
            <Button style={{marginTop:30}} text="Next" />
        </View>
    </View>
  </SafeAreaView>
}

export default Welcome;