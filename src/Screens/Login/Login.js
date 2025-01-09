//import liraries
import React from 'react';
import { View, Text,  ImageBackground, TextInput } from 'react-native';
import styles from './styles';
import TextInputWithLabel from '../../Components/TextInputWithLabel';

// create a component
const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri:'https://anakoskaphotography.com/wp-content/uploads/2018/09/professional-picture-of-a-cute-baby-boy-in-white.jpg' }}
            style={styles.imgStyle}
            >

            <Text style={styles.loginTextStyle}>Login</Text>
            </ImageBackground>

            <View style={styles.mainStyle}>
                <TextInputWithLabel label='Email Address' placeholder='Enter your email address' />
            </View>
        </View>
    );
};
//make this component available to the app
export default Login;
