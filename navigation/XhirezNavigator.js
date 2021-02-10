import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgetPassword from '../screens/ForgetPassword';
import Dashboard from '../screens/Dashboard';

const XhirezNavigator = createStackNavigator({
    SignIn: {
        screen: SignInScreen
    },
    SignUp: {
        screen: SignUpScreen
    },
    Login: {
        screen: LoginScreen
    },
    ForgetPassword: {
        screen: ForgetPassword
    },
    Dashboard: {
        screen: Dashboard
    }
});

export default createAppContainer(XhirezNavigator);