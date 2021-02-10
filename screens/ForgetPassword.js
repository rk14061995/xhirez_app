import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import RoundTextView from '../components/RoundTextView';
import RoundButton from '../components/RoundButtons';

const ForgetPassword = props => {
    return(
        <View>
            <View style={styles.imageGallery}>
                <Image style={styles.imageContainer} source={require('../assets/images/Forget-Password.png')}/>
            </View>
            <View style={styles.textView}>
                <Text>Forget Password?</Text>
            </View>
            <View style={styles.textContainer}>
                <RoundTextView style={styles.textPlace} placeholder='yourmail@mail.com'></RoundTextView>
            </View>
            <View style = {styles.buttonContainer}>
                <RoundButton style={{backgroundColor: '#0EE8E8', color: 'white'}}>Send Email</RoundButton>
            </View>
            <View style={styles.loginText}>
                <Text onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Login'
                    })
                }}>Back to <Text style={{color: '#0EE8E8'}}>Login</Text></Text>
            </View>
        </View>
    );
};

ForgetPassword.navigationOptions = {
    headerTitle: 'Forget Password'
};

const styles = StyleSheet.create({
    imageContainer: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').width * 0.8
    },
    imageGallery: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        marginTop: 100,
        marginLeft: 50
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    textPlace: {
          padding: 10,
          marginLeft: 20
    },
    buttonContainer: {
       marginTop: 20,
       justifyContent: 'center',
       alignItems: 'center' 
    },
    loginText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
});

export default ForgetPassword;