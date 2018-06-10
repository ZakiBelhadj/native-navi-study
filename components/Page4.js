import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Page4 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tit}>Page 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5f27cd'
  },
  tit: {
    fontSize: 30,
    color: '#fff',
  },
})
