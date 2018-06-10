import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Page1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tit}>Page 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9f43'
  },
  tit: {
    fontSize: 30,
    color: '#fff',
  },
})
