import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Body, Icon, Left, Button} from 'native-base';
import { View, Text, ImageBackground} from 'react-native';
import Communications from 'react-native-communications';
import { material} from 'react-native-typography';
export default class HomeScreen extends React.Component {

  render() {

    
    return (
        <Container>
            
        <Header  style={{backgroundColor:'#FFFFFF'}}>
        <Left><Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='arrow-back' style={{color:'#000000'}}/>
            </Button></Left>
        <Body>
        <Text style={material.title}>Autodriver Details</Text>
        </Body>
        </Header>
        <Content>
          <Card>
            <CardItem header style={{backgroundColor:'#0A559D'}}>
              <Text style={material.titleWhite}>Reghu</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('8281406360',true)}> <Icon name='call' /> 8281406360</Text>
              </Body>
            </CardItem>
         </Card><Card>
            <CardItem header style={{backgroundColor:'#0A559D'}}>
              <Text style={material.titleWhite}>Johnson</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('9544399823',true)}> <Icon name='call' /> 9544399823</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#0A559D'}}>
              <Text style={material.titleWhite}>Sunny</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('9605133951',true)}> <Icon name='call' /> 9605133951</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#0A559D'}}>
              <Text style={material.titleWhite}>Santhosh</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text  onPress={() => Communications.phonecall('9072875605',true)}> <Icon name='call' /> 9072875605</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#0A559D'}}>
              <Text style={material.titleWhite}>Sreejith</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('8113968609',true)}> <Icon name='call' /> 8113968609</Text>
              </Body>
            </CardItem>
         </Card>

          <Card>
            <CardItem header style={{backgroundColor:'#0A559D'}}>
              <Text style={material.titleWhite}>Siby</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('9544509903',true)}> <Icon name='call' /> 9544509903</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#0A559D'}}>
              <Text style={material.titleWhite}>Shaji</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('8606103570',true)}> <Icon name='call' /> 8606103570</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#0A559D'}}>
              <Text style={material.titleWhite}>Benoy</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('9544726594',true)}> <Icon name='call' /> 9544726594</Text>
              </Body>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}