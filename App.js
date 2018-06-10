import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { DrawerNavi } from './navigation';


export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <DrawerNavi />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
