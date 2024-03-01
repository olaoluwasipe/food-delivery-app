import { useEffect, useState } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { getToken } from './AuthService';
// import axios from 'axios';
// import Ionicon from 'react-native-vector-icons/Ionicons'; 



// SCREENS IMPORT
import Home from "./screens/Home";
import Navigator from './Navigator';
import Welcome from './screens/onboarding/Welcome';
import Onboarding from './screens/onboarding/Onboarding';
import SignUp from './screens/sign/SignUp';
// import Search from './screens/Search';
// import Library from './screens/Library';
// import MangaView from './screens/MangaView';
// import TopMangaView from './screens/TopMangaView';
// import ViewManga from './screens/ViewManga';

// COMPONENTS IMPORT

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // background: '#16171F'
  }
}

// SCREEN NAMES
const HOME = 'home'
// const HOME  = 'home'
const EXPLORE = 'explore'
const SELL = 'sell'
const CART = 'cart'
const ACCOUNT = 'account';

const App = () => {
  const [startPoint, setstartPoint] = useState('Welcome');
  // const [tokenRetrieved, setTokenRetrieved] = useState(false);
  // const initApp = async () => {
  //   const token = await getToken();
  
  //   if (typeof token !== 'undefined' && token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //     return token.length > 10 ? 'Home' : 'Welcome';
  //   }
    
  //   return 'Welcome';
  // };
  
  // useEffect(() => {
  //   const initializeApp = async () => {
  //     start = await initApp();
  //     setstartPoint(start)
  //     setTokenRetrieved(true);
  //   };
    
  //   initializeApp();
  // }, [])

  // if (!tokenRetrieved) {
  //   // Display a loading indicator or splash screen until the token retrieval process completes
  //   return (
  //     <View style={{flex: 1}}>
  //       <Image style={{height: '100%', width: '100%'}} source={{uri: '../assets/splash.png'}} />
  //       <ActivityIndicator size="large" color="#ff4500" />
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={startPoint}>
        <Stack.Screen name="Navigator" component={Navigator} options={{ title: 'navigator' }} />
        {/* Sign Up Logic */}
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
        <Stack.Screen name='Home' component={Home} options={{tilte: 'Home'}} />
        {/* <Stack.Screen name='Library' component={Library} options={{title: 'Library'}} />
        <Stack.Screen name='Search' component={Search} options={{title: 'Search'}} />
        <Stack.Screen name='MangaView' component={MangaView} options={{title: 'Manga View'}} />
        <Stack.Screen name='TopMangaView' component={TopMangaView} options={{title: 'Top Manga View'}} />
        <Stack.Screen name='ViewManga' component={ViewManga} options={{title: 'View Manga'}} /> */}
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Onboarding' component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;