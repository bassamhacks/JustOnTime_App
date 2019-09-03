import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Body, Icon,Left,Button, Spinner} from 'native-base';
import { View, Text, ImageBackground, FlatList} from 'react-native';
import * as myConstants from './constants';
import { material} from 'react-native-typography';
export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true,
        busdetails: null
        }
      }

    componentDidMount(){
    
        return fetch('http://test.gitzberry.com/collegeBus.php?DESTINATION='+myConstants.place)
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
        <Left><Button transparent onPress={() => this.props.navigation.navigate('College')}>
              <Icon name='arrow-back' style={{color:'#000000'}}/>
            </Button></Left>
        <Body>
        <Text style={material.title}>Buses from {myConstants.place} </Text>
        </Body>
        </Header>
        <View >
        <FlatList 
          data = {this.state.busdetails}
          renderItem = {({item}) => 
          <Card>
            <CardItem style={{backgroundColor:'#0A559D'}} button onPress={() => this.props.navigation.navigate('CBD',{BusID:item})}>
              <Text style={material.titleWhite}>Bus No: {item}</Text>
            </CardItem>
         </Card>}
          />
          {this.state.isLoading && <Spinner color='blue' />}
           <Text style={material.caption}>Tap on bus number to know more </Text>
      </View>
      </Container>
    );
  }
}