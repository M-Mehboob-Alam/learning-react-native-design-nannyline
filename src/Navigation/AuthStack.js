import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Register, SetPassword, ChoosePassword, ForgotPassword} from '../Screens'
import navigationString from '../constants/navigationString';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationString.LOGIN} component={Login} />
      <Stack.Screen name={navigationString.REGISTER} component={Register} />
      <Stack.Screen name={navigationString.SET_PASSWORD} component={SetPassword} />
      <Stack.Screen name={navigationString.CHOOSE_PASSWORD} component={ChoosePassword} />
      <Stack.Screen name={navigationString.FORGOT_PASSWORD} component={ForgotPassword} />
    </Stack.Navigator>
  );
}