import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform, Button, Dimensions} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const RoundTextView = props => {
    return(<View style={styles.buttonContainer}>
          <TextInput {...props} ></TextInput>
    </View>);
};

const styles = StyleSheet.create({
     buttonContainer: {
         borderRadius: 25,
         overflow: 'hidden',
         backgroundColor: 'white',
         width: Dimensions.get('window').width * 0.8
     }
});

export default RoundTextView;