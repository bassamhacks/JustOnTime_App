import React, {Component} from 'react';
import { Container, Header,Text, Left, Title, Body, Right, Card, CardItem,Button,Icon,Content} from 'native-base';
import {Image,ImageBackground,BackHandler,Alert,TouchableHighlight} from 'react-native';
import { material } from 'react-native-typography';
import * as myConstants from './constants';
var ern='ERN';
var tcr='TCR';
var clt='CLT';
var qln='QLN';
var tvc='TVC';

export default class App extends Component {

    _setPlace(place){
        myConstants.train_place=place;
        this.props.navigation.navigate('AllTrain');
    } 

    render() {
      return (
        <Container>
            
        <Header  style={{backgroundColor:'#FFFFFF'}}>
        <Left><Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='arrow-back' style={{color:'#000000'}}/>
            </Button></Left>
        <Body>
        <Text style={material.title}>Trains between</Text>
        </Body>
        </Header>
        <Content>
        <Card >
          <CardItem header button style={{backgroundColor:'#0A559D'}} onPress={(place) => this._setPlace(ern)}>
            <Text style={material.titleWhite}>Kottayam and Ernakulam</Text>
          </CardItem>
       </Card>

       <Card >
          <CardItem header button style={{backgroundColor:'#0A559D'}} onPress={(place) => this._setPlace(tcr)}>
            <Text style={material.titleWhite}>Kottayam and Thrissur</Text>
          </CardItem>
       </Card>

       <Card >
          <CardItem header button style={{backgroundColor:'#0A559D'}} onPress={(place) => this._setPlace(clt)}>
            <Text style={material.titleWhite}>Kottayam and Kozhikode</Text>
          </CardItem>
       </Card>

       <Card >
          <CardItem header button style={{backgroundColor:'#0A559D'}} onPress={(place) => this._setPlace(qln)}>
            <Text style={material.titleWhite}>Kottayam and Kollam</Text>
          </CardItem>
       </Card>

       <Card >
          <CardItem header button style={{backgroundColor:'#0A559D'}} onPress={(place) => this._setPlace(tvc)}>
            <Text style={material.titleWhite}>Kottayam and Trivandrum</Text>
          </CardItem>
       </Card>
        </Content>
        </Container>
      );
    }
}