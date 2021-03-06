import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({route}) => {
  const {paletteName, colors} = route.params;
  return (
    // NOTE: `react navigation`  handles the screen size, etc so we do NOT need the `<SafeAreaView>` anymore!
    <SafeAreaView style={styles.safeArea}>
      {/* NOTE: While it may be fine to do on the web, in React Native you should avoid using map in the render.
      This is because mapping over an array is not optimized.
      React Native will attempt to render every single element in the array all at once, regardless of whether they are visible on the screen or not.
      There are special components in React Native for rendering lists: these are FlatList and SectionList. */}
      <FlatList
        style={styles.container}
        data={colors}
        // NOTE: if our data has unique keys, we will NOT need to specify the `keyExtractor` prop here anymore!
        keyExtractor={(item) => item.colorName}
        // NOTE: we destructure `{item}` below because `renderItem` also returns the item id:
        renderItem={({item}) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        // NOTE: for `ListHeaderComponent` we can either pass a function that returns a component, or we can just pass the component itself:
        ListHeaderComponent={<Text style={styles.text}>{paletteName}</Text>}
      />
      {/* NOTE: we can apply more than one style to an element by passing an array to the style prop: */}
      {/* NOTE: multiple styles cascade, meaning the last style overwrites the previous ones (if there is overlap/common styling) */}
      {/* NOTE: there is an equivalent for styled-components in React Native */}
      {/* <View style={[styles.container, styles.yellow]}>
        <Text style={styles.text}>Here are some boxes of different colors</Text>
        <ColorBox colorName="cyan" hexCode="#2aa198" />
        <ColorBox colorName="blue" hexCode="#268bd2" />
        <ColorBox colorName="magenta" hexCode="#d33682" />
        <ColorBox colorName="orange" hexCode="#cb4b16" />
      </View> */}
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
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
    // paddingVertical: 10,
    paddingHorizontal: 10,
    paddingTop: 40,
    // borderColor: 'red',
    // borderWidth: 2,
    backgroundColor: 'white',
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

export default ColorPalette;
