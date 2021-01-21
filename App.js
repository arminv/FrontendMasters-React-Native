import 'react-native-gesture-handler';
import React from 'react';
// NOTE: `SafeAreaView` allows for styling that is compatible with different devices:
// NOTE: in React Native, all styling is done via `StyleSheet`:
// import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
// import ColorBox from './components/ColorBox';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* NOTE: the stack at the top (root) will be visible by default (`Home` in this case)! */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
