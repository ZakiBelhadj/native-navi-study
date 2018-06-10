import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

export default class Barcode extends React.Component {
  static navigationOptions = {
    
  };

  render() {
    return (
      <Container>
        <Div>
          <H1>Barcode</H1>
        </Div>
        <Div flex2>
          <Image
            source={{ uri: 'http://www.stickpng.com/assets/images/584bf0bba62aaa830c43edb2.png' }}
            style={{width: 400 / 2, height: 233 / 2}}
          />
        </Div>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #c8d6e5;
`;

const Div = styled.View`
  flex: ${props => {
    if(props.flex2){
      return 2
    } else if(props.flex3){
      return 3
    } else {
      return 1
    }
  }};
  justify-content: center;
  align-items: center;
`;

const H1 = styled.Text`
  color: #fff;
  font-size:50px;
`;
