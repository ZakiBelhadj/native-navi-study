import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Page3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tit}>Page 3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1dd1a1'
  },
  tit: {
    fontSize: 30,
    color: '#fff',
  },
})
