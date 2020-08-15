import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const AppStack = createStackNavigator();

const isLoggedIn = true;

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
      >
        {isLoggedIn ? (
          <AppStack.Screen name="Dashboard" component={Dashboard} />
        ) : (
            <>
              <AppStack.Screen name="SignIn" component={SignIn} />
              <AppStack.Screen name="SignUp" component={SignUp} />
            </>
          )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;