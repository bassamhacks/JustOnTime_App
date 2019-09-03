import React, {Component} from 'react';
import { Container, Header,Text, Left, Title, Body, Right, Card, CardItem,Button,Icon,Content} from 'native-base';
import {Image,ImageBackground,BackHandler,Alert,TouchableHighlight,FlatList} from 'react-native';
import { material } from 'react-native-typography';
import * as myConstants from './constants';
var ktymern = require('../assets/Data/ktym-ern.json');
var ktymtcr = require('../assets/Data/ktym-tcr.json');
var ktymclt = require('../assets/Data/ktym-clt.json');
var ktymqln = require('../assets/Data/ktym-qln.json');
var ktymtvc = require('../assets/Data/ktym-tvc.json');

export default class App extends Component {

    constructor(props){
        super(props);
        this.state ={ 
        traindetails: null
        }
      }

      componentDidMount(){
        if(myConstants.train_place=='ERN'){
            this.setState({traindetails: ktymern})
        }
        else if(myConstants.train_place=='TCR'){
            this.setState({traindetails: ktymtcr})
        }
        else if(myConstants.train_place=='CLT'){
            this.setState({traindetails: ktymclt})
        }
        else if(myConstants.train_place=='QLN'){
            this.setState({traindetails: ktymqln})
        }
        else if(myConstants.train_place=='TVC'){
            this.setState({traindetails: ktymtvc})
        }
        else{}

      }

    render() {
        return (
            <Container>
            
        <Header  style={{backgroundColor:'#FFFFFF'}}>
        <Left><Button transparent onPress={() => this.props.navigation.navigate('Train')}>
              <Icon name='arrow-back' style={{color:'#000000'}}/>
            </Button></Left>
        <Body>
        <Text style={material.title}>Trains between KTYM and {myConstants.train_place}</Text>
        </Body>
        </Header>
        <Content>
        <FlatList 
          data = {this.state.traindetails}
          initialNumToRender = {10}
          keyExtractor={(item)  => item.number}
          renderItem = {({item}) =>
        <Card >
            <CardItem header style={{backgroundColor:'#0A559D',height:'2%'}} >
              <Text style={{color:'#FFFFFF'}} >Train No: {item.number}</Text>
            </CardItem>
            <CardItem>
              <Body>
              <Text style={{ marginLeft: '6.5%', fontSize:14, color: 'black' }}>
                  Train Name: {item.name}
                </Text>
                <Text style={{ marginLeft: '6.5%', fontSize:14, color: 'black' }}>
                  Departure Time: {item.src_departure_time}
                </Text>
                <Text style={{ marginLeft: '6.5%', fontSize:14, color: 'black' }}>
                  Expected Arrival Time: {item.dest_arrival_time}
                </Text>
                <Text style={{ marginLeft: '6.5%', fontSize:14, color: 'black' }}>
                  Travel Time: {item.travel_time}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer >
              <Text>Departing from Kottayam at: {item.src_departure_time}</Text>
            </CardItem>
         </Card>}
         />
         </Content>
        
        
        </Container>
        );
    }
}