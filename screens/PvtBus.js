import React, { Component } from "react";
import { View, Text, Image, BackHandler } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Left,Button,Icon } from 'native-base';
import * as myConstants from './constants';
import { material } from 'react-native-typography';
export default class HomeScreen extends React.Component {

    saintgitsKottayam = () =>{
        myConstants.source = 'SAINTGITS';
        myConstants.destination = 'KOTTAYAM';
        myConstants.time = new Date().toLocaleTimeString();
        this.props.navigation.navigate('PvtBusDetails');

    }

    Kottayamsaintgits = () =>{
      myConstants.source = 'KOTTAYAM';
      myConstants.destination = 'SAINTGITS';
      myConstants.time = new Date().toLocaleTimeString();
      this.props.navigation.navigate('PvtBusDetails');

  }

  SaintgitsCGY = () => {
      myConstants.source = 'SAINTGITS';
      myConstants.destination = 'CHANGANASSERRY';
      myConstants.time = new Date().toLocaleTimeString();
      this.props.navigation.navigate('PvtBusDetails');
  }


  CGYSaintgits = () => {
    myConstants.source = 'CHANGANASSERRY';
    myConstants.destination = 'SAINTGITS';
    myConstants.time = new Date().toLocaleTimeString();
    this.props.navigation.navigate('PvtBusDetails');
  }

  render() {
    return (
      <Container>
        <Header  style={{backgroundColor:'#FFFFFF'}}>
        <Left><Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='arrow-back' style={{color:'#000000'}}/>
            </Button></Left>
        <Body>
        <Text style={material.title}>Select your choice</Text>
        </Body>
        </Header>
      <Content>
        <Card >
          <CardItem header button onPress={this.saintgitsKottayam} style={{backgroundColor:'#0A559D'}}>
            <Text style={material.titleWhite}>Saintgits to Kottayam</Text>
          </CardItem>
          <CardItem button onPress={this.saintgitsKottayam} >
            <Body>
              <Text style={material.body1}>
              <Image source={require('../assets/school.png')} style={{height:20,width:20}}></Image>{"\t"}{"\t"}{"\t"}{"\t"}SAINTGITS - KOTTAYAM {"\t"}{"\t"}{"\t"}{"\t"}
              <Image source={require('../assets/cityscape.png')} style={{height:20,width:20}}></Image>
              </Text>
            </Body>
          </CardItem>
       </Card>


       <Card>
          <CardItem header button onPress={this.SaintgitsCGY} style={{backgroundColor:'#0A559D'}}>
            <Text style={material.titleWhite}>Saintgits to Changanasserry</Text>
          </CardItem>
          <CardItem button onPress={this.SaintgitsCGY}>
            <Body>
            <Text style={material.body1}>
              <Image source={require('../assets/school.png')} style={{height:20,width:20}}></Image>{"\t"}{"\t"}{"\t"}{"\t"}SAINTGITS - CHANGANASSERRY {"\t"}{"\t"}{"\t"}{"\t"}
              <Image source={require('../assets/cityscape.png')} style={{height:20,width:20}}></Image>
              </Text>
            </Body>
          </CardItem>
       </Card>



        <Card>
          <CardItem header button onPress={this.Kottayamsaintgits} style={{backgroundColor:'#0A559D'}}> 
            <Text style={material.titleWhite}>Kottayam to Saintgits</Text>
          </CardItem>
          <CardItem button onPress={this.Kottayamsaintgits}>
            <Body>
            <Text style={material.body1}>
            <Image source={require('../assets/cityscape.png')} style={{height:20,width:20}}></Image> {"\t"}{"\t"}{"\t"}{"\t"}KOTTAYAM - SAINTGITS  {"\t"}{"\t"}{"\t"}{"\t"}
              <Image source={require('../assets/school.png')} style={{height:20,width:20}}></Image>
              </Text>
            </Body>
          </CardItem>
       </Card>


        <Card>
          <CardItem header button onPress={this.CGYSaintgits} style={{backgroundColor:'#0A559D'}}>
            <Text style={material.titleWhite}>Changanasserry to Saintgits</Text>
          </CardItem>
          <CardItem button onPress={this.CGYSaintgits} >
            <Body >
            <Text style={material.body1}>
            <Image source={require('../assets/cityscape.png')} style={{height:20,width:20}} resizeMode='cover'></Image> {"\t"}{"\t"}{"\t"}{"\t"}CHANGANASSERRY - SAINTGITS  {"\t"}{"\t"}{"\t"}{"\t"}
              <Image source={require('../assets/school.png')} style={{height:20,width:20}} resizeMode='cover' ></Image>
              </Text>
            </Body>
          </CardItem>
       </Card>
      </Content>
    </Container>
    );
  }
}