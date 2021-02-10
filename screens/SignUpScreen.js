import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import RoundTextView from '../components/RoundTextView';
import RoundButton from '../components/RoundButtons';

const SignUpScreen = props => {
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
                    <RoundTextView style={styles.textView} placeholder="Password" secureTextEntry={true}></RoundTextView>
              </View>
              <View style={styles.border}>
                    <Text>Confirm Password</Text>
              </View>
              <View style={styles.content}>
                    <RoundTextView style={styles.textView} placeholder="Confirm Password" secureTextEntry={true}></RoundTextView>
              </View>
              <View style={styles.buttonItems}>
                    <RoundButton style={{backgroundColor: '#0EE8E8', color: 'white'}}>Sign Up</RoundButton>
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
    border: {
        paddingLeft: 50,
        paddingTop: 20,
        alignItems: 'baseline'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        padding: 10
    },
    buttonItems: {
        padding: 30,
        flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center' 
    },
    button: {
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textContainer: {
        margin: 10,
        marginTop: 10
    },
    text: {
        flexDirection: 'row',
    },
});
export default SignUpScreen;