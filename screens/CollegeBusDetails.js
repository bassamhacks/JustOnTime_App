import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Body, Icon,Left,Button, Spinner} from 'native-base';
import { View, Text, ImageBackground, FlatList} from 'react-native';
import Communications from 'react-native-communications';
import * as myConstants from './constants';
import { human,material } from 'react-native-typography';
export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true,
        busdetails: null,
        drivername: null,
        phone: null
        }
      }

    componentDidMount(){

        return fetch('http://test.gitzberry.com/collegeBus.php?pBUS_ID='+ this.props.navigation.state.params.BusID)
          .then((response) => response.json())
          .then((response) => {
    
            this.setState({
              isLoading: false,
              drivername: response.DRIVER_NAME,
              phone: response.PHONE_NUMBER
            });
            this.takeRoute();
    
          })
          .catch((error) =>{
            console.error(error);
          });
        }

        takeRoute = () =>{
        fetch('http://test.gitzberry.com/collegeBus.php?BUS_ID='+ this.props.navigation.state.params.BusID)
          .then((response) => response.json())
          .then((response) => {
    
            this.setState({
              isLoading: false,
              busdetails: response
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
        }

  render() {
    return (
      <Container>
      <Header  style={{backgroundColor:'#FFFFFF'}}>
      <Left><Button transparent onPress={() => this.props.navigation.navigate('Buses')}>
            <Icon name='arrow-back' style={{color:'#000000'}}/>
          </Button></Left>
      <Body>
      <Text style={material.title}>Buses from {myConstants.place} </Text>
      </Body>
      </Header>
        <View >
          {this.state.isLoading && <Spinner color='blue' />}
        <Text style = {material.subheading}>Driver of bus no {this.props.navigation.state.params.BusID}: {this.state.drivername}  </Text>
        <Text style = {material.subheading} onPress={() => Communications.phonecall(this.state.phone,true)}>Phone: <Icon name='call' /> {this.state.phone}  <Text style={material.caption}>Tap to call</Text></Text>
        <Text style = {material.subheading}>Route of bus no: {this.props.navigation.state.params.BusID} </Text>
        <FlatList 
          data = {this.state.busdetails}
          renderItem = {({item}) => 
          <Card>
            <CardItem style={{backgroundColor:'#0A559D'}} button onPress={() => this.props.navigation.navigate('CBD',{BusID:item})}>
              <Text style={material.titleWhite}>{item}</Text>
            </CardItem>
         </Card>}
          />
      </View>
      </Container>
    );
  }
}