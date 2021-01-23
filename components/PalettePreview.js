import React from 'react';
import {View, Text} from 'react-native';

const PalettePreview = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        // NOTE: we use the actual `name` of the screen we want to navigate into (`ColorPalette` in this case):
        // NOTE: the 2nd argument passed to `navigate` are props that we can pass through to the destination screen (and use via `route.params`):
        navigation.navigate('ColorPalette', item);
      }}>
      <Text>{item.paletteName}</Text>
    </TouchableOpacity>
  );
};

export default PalettePreview;
