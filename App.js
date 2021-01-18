import React from 'react';
// NOTE: `SafeAreaView` allows for styling that is compatible with different devices:
// NOTE: in React Native, all styling is done via `StyleSheet`:
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* NOTE: we can apply more than one style to an element by passing an array to the style prop: */}
      {/* NOTE: multiple styles cascade, meaning the last style overwrites the previous ones (if there is overlap/common styling) */}
      {/* NOTE: there is an equivalent for styled-components in React Native */}
      <View style={[styles.container, styles.yellow]}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        <ColorBox colorName="cyan" hexCode="#2aa198" />
        <ColorBox colorName="blue" hexCode="#268bd2" />
        <ColorBox colorName="magenta" hexCode="#d33682" />
        <ColorBox colorName="orange" hexCode="#cb4b16" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  yellow: {
    backgroundColor: 'yellow',
  },
  container: {
    // NOTE: we can use `vertical` and `horizontal`, which are equivalents of `top` & `bottom`, `left` & `right` in web development:
    // NOTE: in React Native, there are no units (pixels, etc.):
    // NOTE: another difference with web development is that in React Native we use camel case for styling (no dashes):
    // NOTE: all positioning in React Native is done via flexbox (i.e. `display: flex`)
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // paddingVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 40,
    // borderColor: 'red',
    // borderWidth: 2,
  },
  safeArea: {
    flex: 2,
  },
  text: {
    // NOTE: the default `fontSize` is 16
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
