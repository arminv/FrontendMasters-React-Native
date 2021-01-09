import React from 'react';
// NOTE: `SafeAreaView` allows for styling that is compatible with different devices:
import {View, Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello world!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
