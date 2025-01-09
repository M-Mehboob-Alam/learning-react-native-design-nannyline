import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgStyle:{
        height: moderateScale(200),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    loginTextStyle:{
        fontSize: scale(32),
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        
    },
    mainStyle:{
        paddingHorizontal: moderateScale(24),
        paddingVertical: moderateVerticalScale(44),
    }
   
});

export default styles