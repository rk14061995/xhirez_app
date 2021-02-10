import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, Dimensions } from 'react-native';

import RoundButton from '../components/RoundButtons';

const SignInScreen = props => {
return (
    <View >
        
        <View>
        <ImageBackground source={require('../assets/images/Signin.png')} style={{width: '100%', height: '100%'}} >
        <Image source={require('../assets/Xhirez-Logo.png')}style={styles.card}/>
        <View style={styles.button}>
            <RoundButton onPress={() => {
                props.navigation.navigate({
                    routeName: 'Login'
                })
            }} >Sign in</RoundButton>
            <View style={styles.create}>
            <RoundButton onPress={() => {
                props.navigation.navigate({
                    routeName: 'SignUp'
                })
            }}>Create account</RoundButton>
            </View>
            <Text onPress={() => {
                props.navigation.navigate({
                    routeName: 'ForgetPassword'
                })
            }}>Recover Password?</Text>
            <View style={styles.textContainer}>
            <Text style={{textAlign: 'center'}}>By choosing "sign in", you agree to Xhirez</Text>
            <View style={styles.text}>
            <Text style={{fontFamily: 'open-sans-bold'}}>Terms of Services</Text><Text> and consent to our</Text><Text style={{fontFamily: 'open-sans-bold'}}> cookie policy</Text><Text> and</Text>
            
            </View>
            <Text style={{fontFamily: 'open-sans-bold'}}>privacy policy. Do Not Sell My Personal Information.</Text>
            </View>
           
            </View>
            

        </ImageBackground>
        </View>
        
       
        
        
        
    </View>
    
);
};

SignInScreen.navigationOptions = {
    headerTitle: 'Xhirez'
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8,
        alignItems: 'center'
    },
    button: {
        marginVertical: Dimensions.get('window').height * 0.45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    create: {
        padding: 10
    },
    text: {
        flexDirection: 'row',
    },
    textContainer: {
        marginTop: 10,
    }
});

export default SignInScreen;