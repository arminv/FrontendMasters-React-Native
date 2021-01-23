import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const PalettePreview = ({colorPalette, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{colorPalette.paletteName}</Text>
    </TouchableOpacity>
  );
};

export default PalettePreview;
