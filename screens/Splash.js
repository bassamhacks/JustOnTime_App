import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Body, Icon, Left, Button,Item} from 'native-base';
import { Image,View, Text, ImageBackground, Dimensions, StatusBar} from 'react-native';
import styles from './styles';
const logo = require("../assets/sg.png");
export default class HomeScreen extends React.Component {

    componentDidMount(){
        setTimeout(()=>{this.setTimePassed();},1000);}

        setTimePassed(){
                this.props.navigation.navigate('Home');
        }

    

  render() {

    
    return (
        <ImageBackground source={require('../assets/login.jpg')} style={styles.imageContainer}>
        <View>
        <StatusBar
          backgroundColor="#FFFFFF"
          barStyle="light-content"
        />
      </View>
      <Container>
                <Item style={{borderBottomWidth: 0, justifyContent:'center', marginTop:'50%'}}>
                  <Image source={logo} style={styles.logo} resizeMode='contain' />
                </Item>
      </Container>
      </ImageBackground>
    );
  }
}