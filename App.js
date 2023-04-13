// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test222 from './components/test2.js';
import Test221 from './components/test.js';
import Test223 from './components/test3.js';
import Test224 from './components/test4.js';
import Test225 from './components/test5.js';
import Test226 from './components/test6.js';
import Test227 from './components/test7.js';
import { AppProvider } from './components/AppContext';
import { ApplicationContext } from "./components/AppContext";
const Stack = createNativeStackNavigator();


function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomePage" component={Test222} />
          <Stack.Screen name="TestPage2" component={Test221} />
          <Stack.Screen name="TestPage3" component={Test223} />
          <Stack.Screen name="TestPage4" component={Test224} />
          <Stack.Screen name="TestPage5" component={Test225} />
          <Stack.Screen name="TestPage6" component={Test226} />
          <Stack.Screen name="TestPage7" component={Test227} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;