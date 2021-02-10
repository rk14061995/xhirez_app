import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, Button, Dimensions} from 'react-native';


const RoundButton = props => {
    let ButtonComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return(<View style={styles.buttonContainer}>
        <ButtonComponent 
        {...props}
        activeOpacity={0.6} >
            <View style={{...styles.button, ...props.style}}>
    <Text style={{...styles.buttonText, ...props.style}}>{props.children}</Text>
            </View>
        </ButtonComponent>
    </View>);
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'black',
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center'
    },
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden',
        width: Dimensions.get('window').width * 0.8
    }
});
export default RoundButton;