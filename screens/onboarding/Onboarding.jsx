import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';


const { width, height } = Dimensions.get('window');

const Onboarding = ({navigation}) => {
    const handlePress = () => {
      // Handle button press
      navigation.navigate('SignUp')
    };
  return (
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: height, width: width }}>
    <View>
        <Image source={require('../../assets/onboarding2.png')} />
        <View style={{width: Math.round(width/1.3), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: 10}}>
            <Text style={{fontSize: 35, color:'#000', textAlign: 'center', fontWeight: 600}}>Food Ninja is Where Your Comfort Food Lives</Text>
            <Text style={{marginTop: 20, textAlign: 'center', fontSize: 18, textTransform: 'capitalize' }}>Enjoy a fast and smooth food delivery at your doorstep!</Text>
            <Button onPress={handlePress} style={{marginTop:30}} text="Next" />
        </View>
    </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({})