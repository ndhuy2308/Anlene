// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage.js';
import Page2Test from './components/Page2Test.js';
import Page3Form from './components/Page3Form.js';
import Page4 from './components/Page4.js';
import Page5 from './components/Page5.js';
import Page6 from './components/Page6.js';
import { AppProvider } from './components/AppContext';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Page2" component={Page2Test} />
          <Stack.Screen name="Page3" component={Page3Form} />
          <Stack.Screen name="Page4" component={Page4} />
          <Stack.Screen name="Page5" component={Page5} />
          <Stack.Screen name="Page6" component={Page6} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;