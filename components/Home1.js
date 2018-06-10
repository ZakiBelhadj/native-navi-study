import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import styled from 'styled-components';

export default class Home1 extends React.Component {
  render() {
    return (
      <Container>
        <Div>
          <H1>List</H1>
        </Div>
        <Div flex2>
          <Button
            onPress={() => this.props.navigation.navigate('Page1')}
            >
           <Span>→ To Page 1</Span>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate('Page2')}
            >
           <Span>→ To Page 2</Span>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate('Page3')}
            >
           <Span>→ To Page 3</Span>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate('Page4')}
            >
           <Span>→ To Page 4</Span>
          </Button>
        </Div>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #0abde3;
`;

const Div = styled.View`
  flex: ${props => props.flex2 ? 2 : 1};
  justify-content: center;
  align-items: center;

`;

const H1 = styled.Text`
  color: #fff;
  font-size:50px;
`;

const Button = styled.TouchableOpacity`
`;

const Span = styled.Text`
  padding: 10px 20px;
  margin-top:20px;
  color: #ff9f43;
  font-size:20px;
  background-color:#fff;
  border:2px #fff solid;
`;
