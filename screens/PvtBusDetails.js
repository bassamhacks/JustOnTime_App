import React, { Component } from "react";
import { View, Text, FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Icon,Left,Button} from 'native-base';
import * as myConstants from './constants';
import { material} from 'react-native-typography';
var ktymsg = require('../assets/Data/ktym-sg.json');
var sgktym = require('../assets/Data/sg-ktym.json');
var cgysg = require('../assets/Data/cgy-sg.json');
var sgcgy = require('../assets/Data/sg-cgy.json');

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    busdetails: null
    }
  }

  

  componentDidMount(){
    if (myConstants.source=='KOTTAYAM' && myConstants.destination=='SAINTGITS'){
      this.setState({busdetails: ktymsg});
    }
    else if (myConstants.source=='SAINTGITS' && myConstants.destination=='KOTTAYAM'){
      this.setState({busdetails: sgktym})
    }
    else if(myConstants.source=='SAINTGITS' && myConstants.destination=='CHANGANASSERRY'){
      this.setState({busdetails: sgcgy})
    }
    else if(myConstants.source=='CHANGANASSERRY' && myConstants.destination=='SAINTGITS'){
      this.setState({busdetails: cgysg})
    }
    else{}
    
    }


  render() {
    return (
      <Container>
      <Header  style={{backgroundColor:'#FFFFFF'}}>
      <Left><Button transparent onPress={() => this.props.navigation.navigate('PvtBus')}>
            <Icon name='arrow-back' style={{color:'#000000'}}/>
          </Button></Left>
      <Body>
      <Text style={material.title}>Private Bus Schedule</Text>
      </Body>
      </Header>
        <View >
        <Text style = {material.subheading}>Buses from {myConstants.source} to {myConstants.destination}</Text>
        <FlatList 
          data = {this.state.busdetails}
          keyExtractor={(item)  => item.BUS_ID}
          renderItem = {({item}) => 
          <Card>
            <CardItem header style={{backgroundColor:'#0A559D'}}>
            <Left>
            <Icon name='bus' style={{color:'#FFFFFF'}}/><Text style={material.subheadingWhite}>{item.BUS_NAME}</Text></Left>
            <Body><Text style={material.subheadingWhite}> Arriving at {item.BUS_TIME}</Text></Body>
            </CardItem>
         </Card>}
          />
      </View>
      </Container>
    );
  }
}