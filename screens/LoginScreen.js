import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import RoundButton from '../components/RoundButtons';
import RoundTextView from '../components/RoundTextView';

const LoginScreen = props => {
     return(
         <View>
             <View style={styles.border}>
             <Text>Email</Text>
             </View>
         <View style={styles.content}>
         <RoundTextView style={styles.textView} placeholder="yourmail@mail.com"></RoundTextView>
         </View>

         <View style={styles.border}>
             <Text>Password</Text>
             </View>
         <View style={styles.content}>
         <RoundTextView style={styles.textView} placeholder="Password" secureTextEntry={true} ></RoundTextView>
         </View>
         <View style={styles.button}>
             <RoundButton style={{backgroundColor: '#0EE8E8', color: 'white'}} onPress={() => {
                 props.navigation.navigate({
                     routeName: 'Dashboard'
                 })
             }}>Sign In</RoundButton>
         </View>

         <View style={styles.button}>
             <Text onPress={() => {
                 props.navigation.navigate({
                     routeName: 'ForgetPassword'
                 }
                 )
             }}>Recover Password?</Text>
         </View>

         <View style={styles.buttonItems}>
             <RoundButton>
                 Sign In with Google</RoundButton>
         </View>

         <View style={styles.button}>
             <RoundButton>Sign In with Facebook</RoundButton>
         </View>

         <View style={styles.textContainer}>
         <Text style={{textAlign: 'center'}}>By choosing "sign in", you agree to Xhirez</Text>
            <View style={styles.text}>
            <Text style={{fontFamily: 'open-sans-bold'}}>Terms of Services</Text><Text> and consent to our</Text><Text style={{fontFamily: 'open-sans-bold'}}> cookie policy</Text><Text> and</Text>
            
            </View>
            <Text style={{fontFamily: 'open-sans-bold'}}>privacy policy. Do Not Sell My Personal Information.</Text>
         </View>
         
         </View>
         
     );
};

const styles = StyleSheet.create({
    textView: {
        padding: 10,
        
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        paddingLeft: 50,
        paddingTop: 20,
        alignItems: 'baseline'
    },
    button: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        flexDirection: 'row',
    },
    textContainer: {
        margin: 10,
        marginTop: 100
    },
    icon: {
        width: 10,
        height: 10,
   },
   buttonItems: {
       flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center' 
   }
});

export default LoginScreen;