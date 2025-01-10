//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import FontAwesome from '@expo/vector-icons/FontAwesome'
// create a component
const TextInputWithLabel = ({label, placeholder, inputStyle = {},...props}) => {
    return (
        <View style={styles.inlineStyle}>
                <Text style={styles.labelTextStyle}>{label}</Text>
                <TextInput style={{ ...styles.inputStyle, ...inputStyle }} placeholder={placeholder} {...props} />
                <FontAwesome name="eye" style={styles.iconStyle} size={24} color="black" />
                <FontAwesome name="eye-slash" style={styles.iconStyle} size={24} color="black" />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
   inputStyle:{
           borderBottomWidth: 1,
           borderBottomColor: 'rgba(0,0,0,0.08)',
           borderRadius: moderateScale(4),
           fontSize: scale(16),
           color: 'rgba(0,0,0,0.8)',
   
    },
    inlineStyle:{
        paddingVertical: moderateVerticalScale(8),
    },
    labelTextStyle:{
        fontSize: scale(14),
        color: 'rgba(0,0,0,0.5)',
    },
    iconStyle:{
        color: 'rgba(0,0,0,0.5)',
    }
});

//make this component available to the app
export default TextInputWithLabel;
