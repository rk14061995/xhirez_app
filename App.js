import { StatusBar } from 'expo-status-bar';
import React, {  useState } from 'react';
import {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignInScreen from './screens/SignInScreen';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AppLoading } from 'expo';
import XhirezNavigator from './navigation/XhirezNavigator';


const fetchFonts =() => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => SplashScreen.hideAsync(), 2000);
  }, []);
  
  if (!dataLoaded) {
    return(<AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError = {(err) => console.log(err)}
      />
      );
  }

 
  return (
    <XhirezNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
