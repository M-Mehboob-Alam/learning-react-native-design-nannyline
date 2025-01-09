//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
// create a component
const TextInputWithLabel = ({label, placeholder}) => {
    return (
        <View style={styles.inlineStyle}>
                <Text>{label}</Text>
                <TextInput style={styles.inputStyle} placeholder={placeholder} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
   inputStyle:{
           borderBottomWidth: 1,
           borderBottomColor: 'rgba(0,0,0,0.08)',
           borderRadius: moderateScale(4),
   
    },
    inlineStyle:{
        paddingVertical: moderateVerticalScale(8),
    }
});

//make this component available to the app
export default TextInputWithLabel;
