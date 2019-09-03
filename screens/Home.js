/**
 * Just On Time
 *
 *
 * @Bassam_VP
 */

import React, {Component} from 'react';
import { Container, Header,Text, Left, Title, Body, Right, Card, CardItem,Button} from 'native-base';
import {Image,ImageBackground,BackHandler,Alert,TouchableHighlight} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Carousel from 'react-native-smart-carousel';
import saintgits from '../assets/saintgits.jpg';
import amphi from '../assets/college.jpg';
import img1 from '../assets/buses.jpg';
import buses from '../assets/bus1.jpg';
import amp from "../assets/amp.jpg";

import { material } from 'react-native-typography'


const datacarousel = [
  {
      "id": 339964,
      "imagePath": saintgits
  },
  {
      "id": 339403,
      "imagePath": amphi
  },
  
  {
    "id": 337885,
    "imagePath": buses
},
{
  "id": 339457,
  "imagePath": amp
},
  {
    "id": 339777,
    "imagePath": img1
  },
];



export default class App extends Component {

  


  render() {
    return (
      <Container>
        <Header  style={{backgroundColor:'#FFFFFF'}}>
      <Body>
        
      <Text style={material.title}>Just On Time</Text>
      </Body>
      </Header>
          <Grid>
            <Row style={{ height: '40%' }}>
                        <Carousel data={datacarousel} autoPlay={true} playTime={3000} />
            </Row>


            <Row style={{ backgroundColor: '#FFFFFF', height: '28.5%', paddingTop:'5%' }}>

            <Col style={{ backgroundColor: '#FFFFFF'}}>
            <Body>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('PvtBus')} underlayColor='#D1D1D1'>
            <Image source={require('../assets/bus.png')} style={{height:70, width:70}}/>
            </TouchableHighlight>
            <Text style={material.subheading} onPress={() => this.props.navigation.navigate('PvtBus')}>Private Bus Details</Text>
            <Text style={material.caption} onPress={() => this.props.navigation.navigate('PvtBus')}>Timing details</Text>
            </Body>
          
            </Col>
            <Col style={{ backgroundColor: '#FFFFFF' }}>
            <Body>
              <TouchableHighlight onPress={() =>this.props.navigation.navigate('College')} underlayColor='#D1D1D1'>
                  <Image source={require('../assets/bus-side-view.png')} style={{height:70, width:70}}/>
                  </TouchableHighlight>
                  <Text style={material.subheading} onPress={() =>this.props.navigation.navigate('College')}>College Bus Details</Text>
                  <Text style={material.caption} onPress={() => this.props.navigation.navigate('College')}>Timing and stops details</Text>
            </Body>
            </Col>
            </Row>
            <Row style={{ backgroundColor: '#FFFFFF', height: '28.5%' }}>
            <Col style={{ backgroundColor: '#FFFFFF' }}>
            <Body>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Train')} underlayColor='#D1D1D1'>
            <Image source={require('../assets/subway.png')} style={{height:70, width:70}}/>
            </TouchableHighlight>
            <Text style={material.subheading} onPress={() => this.props.navigation.navigate('Train')}>Train Details</Text>
            <Text style={material.caption} onPress={() => this.props.navigation.navigate('Train')}>Train Schedule</Text>
            </Body>
            </Col>
            <Col style={{ backgroundColor: '#FFFFFF' }}>
            <Body >
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Auto')} underlayColor='#D1D1D1'>
            <Image source={require('../assets/rickshaw.png')} style={{height:70, width:70}} />
            
            </TouchableHighlight>
            <Text style={material.subheading} onPress={() => this.props.navigation.navigate('Auto')}>Call Autorickshaw</Text>
            <Text style={material.caption} onPress={() => this.props.navigation.navigate('Auto')}>Nearby Auto-drivers</Text>
            </Body>
            </Col>
            </Row>
            <Row style={{height:'3%'}}>
            <Text style={material.caption} >Powered by Gitzberry and Idea by Christow T Joseph and team</Text></Row>
          </Grid>
      </Container>
    );
  }
}

