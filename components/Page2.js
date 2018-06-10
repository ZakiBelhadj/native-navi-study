import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Page2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tit}>Page 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6b6b'
  },
  tit: {
    fontSize: 30,
    color: '#fff',
  },
})
