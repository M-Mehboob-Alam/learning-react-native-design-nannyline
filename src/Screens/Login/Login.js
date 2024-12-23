//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import navigationString from '../../constants/navigationString';

// create a component
const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title="Register" onPress={() => navigation.navigate(navigationString.REGISTER)}/>>
            <Text>Login</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Login;
