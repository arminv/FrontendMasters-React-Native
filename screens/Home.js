import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// NOTE: https://reactnavigation.org/docs/navigation-prop/
const Home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          //   NOTE: we use the actual `name` of the screen we want to navigate into (`ColorPalette` in this case):
          navigation.navigate('ColorPalette');
        }}>
        <Text>Solarized!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
