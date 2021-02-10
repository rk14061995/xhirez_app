import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const Dashboard = props => {
    return(
        <View>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/Xhirez-Logo.png')}/>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Hello, Mike!</Text>
                <Text style={styles.innerText}>Find the right job or internship for you!</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        resizeMode: 'contain'
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#0EE8E8', 
        fontFamily: 'open-sans-bold',
        fontSize: 22
    },
    innerText: {
        marginTop: 10,
        fontSize: 18
    }
});

export default Dashboard;