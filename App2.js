import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subtit}>Navigation Study!</Text>
        <Text style={styles.tit}>MAIN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0abde3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tit: {
    color: '#fff',
    fontSize: 80,
  },
  subtit: {
    marginBottom: 5,
    color: '#fff',
    fontSize: 20,
  }
});
