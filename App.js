import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {HomeScreen ,ForgotPasswordScreen, LoginScreen, SignupScreen} from
'./screens';
import { SignupScreen} from './screens';
import { AuthenticatedUserProvider } from './providers';
const App = () => {
  return (
    <AuthenticatedUserProvider>
    <SafeAreaProvider>
    <SignupScreen />
    </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};
export default App;