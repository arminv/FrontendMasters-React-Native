import React from 'react';
// NOTE: `SafeAreaView` allows for styling that is compatible with different devices:
// NOTE: in React Native, all styling is done via `StyleSheet`:
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* NOTE: we can apply more than one style to an element by passing an array to the style prop: */}
      {/* NOTE: multiple styles cascade, meaning the last style overwrites the previous ones (if there is overlap/common styling) */}
      {/* NOTE: there is an equivalent for styled-components in React Native */}
      <View style={[styles.container, styles.yellow]}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        <View style={[styles.cyan, styles.box]}>
          <Text style={styles.boxText}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.blue, styles.box]}>
          <Text style={styles.boxText}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.magenta, styles.box]}>
          <Text style={styles.boxText}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.orange, styles.box]}>
          <Text style={styles.boxText}>Orange: #cb4b16</Text>
        </View>
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
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
