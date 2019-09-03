import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Icon, Picker, Form,Left,Button } from 'native-base';
import * as myConstants from './constants';
import { material} from 'react-native-typography';
export default class HomeScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selected: "MUTHOOR"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
    pass = () =>{
        myConstants.place=this.state.selected;
        this.props.navigation.navigate('Buses');
    }

  render() {
    return (
      <Container>
         <Header  style={{backgroundColor:'#FFFFFF'}}>
        <Left><Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='arrow-back' style={{color:'#000000'}}/>
            </Button></Left>
        <Body>
        <Text style={material.title}>Where do you want to go?</Text>
        </Body>
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text>From SAINTGITS to</Text>
            </CardItem>
            <CardItem>
            <Form>
                <Text>
                  Select your destination:
                </Text>
               
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="KOZHENCHERRY" value="KOZHENCHERRY" />
              <Picker.Item label="KAVIYOOR" value="KAVIYOOR" />
              <Picker.Item label="THENGANA" value="THENGANA" />
              <Picker.Item label="CHENGANNUR" value="CHENGANNUR" />
              <Picker.Item label="MUTHOOR" value="MUTHOOR" />
              <Picker.Item label="THIRUVALLA POST OFFICE" value="THIRUVALLA POST OFFICE" />
              <Picker.Item label="PERUNNAI STAND" value="PERUNNAI STAND" />
              <Picker.Item label="KURUCHY OUTPOST" value="KURUCHY OUTPOST" />
              <Picker.Item label="ALAPPUZHA Pvt Std" value="ALAPPUZHA Pvt Std" />
              <Picker.Item label="NEDUMUDY" value="NEDUMUDY" />
              <Picker.Item label="KIDANGARA" value="KIDANGARA" />
              <Picker.Item label="EDATHUA TOWM" value="EDATHUA TOWM" />
              <Picker.Item label="PODIYADI" value="PODIYADI" />
              <Picker.Item label="CHRY RLWY" value="CHRY RLWY" />
              <Picker.Item label="KAYAMKULAM" value="KAYAMKULAM" />
              <Picker.Item label="MAVELIKKARA" value="MAVELIKKARA" />
              <Picker.Item label="CHANGANACHERRY -BYPASS" value="CHANGANACHERRY -BYPASS" />
              <Picker.Item label="MALLAPPALLY" value="MALLAPPALLY" />
              <Picker.Item label="KARUKACHAL" value="KARUKACHAL" />
              <Picker.Item label="THIRUVALLA" value="THIRUVALLA" />
              <Picker.Item label="THOTTABHAGOM" value="THOTTABHAGOM" />
              <Picker.Item label="ETTUMANOOR TOWN" value="ETTUMANOOR TOWN" />
              <Picker.Item label="MEDICAL COLLEGE" value="MEDICAL COLLEGE" />
              <Picker.Item label="BAKER JN." value="BAKER JN." /> 
              <Picker.Item label="COLLECTORATE" value="COLLECTORATE" />
              <Picker.Item label="DEVALOKAM" value="DEVALOKAM" />
              <Picker.Item label="PAMPADY" value="PAMPADY" />
              <Picker.Item label="PUTHUPPALLY" value="PUTHUPPALLY" />
              <Picker.Item label="MANGANAM KURISU" value="MANGANAM KURISU" />
              <Picker.Item label="PALA" value="PALA" />
              <Picker.Item label="KIDANGOOR JN" value="KIDANGOOR JN" />
              <Picker.Item label="MANARCADU JN" value="MANARCADU JN" />
              <Picker.Item label="PONKUNNAM" value="PONKUNNAM" />
              <Picker.Item label="NJALIAKUZHY" value="NJALIAKUZHY" />
              <Picker.Item label="KANJIKUZHY" value="KANJIKUZHY" />
              <Picker.Item label="PATHANADU" value="PATHANADU" />
              <Picker.Item label="NAGAMPADOM" value="NAGAMPADOM" />
            </Picker>
              </Form>
            </CardItem>
            <CardItem footer button onPress={this.pass} style={{backgroundColor:'#0A559D'}}>
              <Text style={material.subheadingWhite}>Click here to get buses to your destination</Text>
            </CardItem>
         </Card>


          <Card>
            <CardItem header>
              <Text>Destination - SAINTGITS </Text>
            </CardItem>
            <CardItem>
            <Form>
                <Text>
                  Select your current nearby location:
                </Text>
               
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="KOZHENCHERRY" value="KOZHENCHERRY" />
              <Picker.Item label="KAVIYOOR" value="KAVIYOOR" />
              <Picker.Item label="THENGANA" value="THENGANA" />
              <Picker.Item label="CHENGANNUR" value="CHENGANNUR" />
              <Picker.Item label="MUTHOOR" value="MUTHOOR" />
              <Picker.Item label="THIRUVALLA POST OFFICE" value="THIRUVALLA POST OFFICE" />
              <Picker.Item label="PERUNNAI STAND" value="PERUNNAI STAND" />
              <Picker.Item label="KURUCHY OUTPOST" value="KURUCHY OUTPOST" />
              <Picker.Item label="ALAPPUZHA Pvt Std" value="ALAPPUZHA Pvt Std" />
              <Picker.Item label="NEDUMUDY" value="NEDUMUDY" />
              <Picker.Item label="KIDANGARA" value="KIDANGARA" />
              <Picker.Item label="EDATHUA TOWM" value="EDATHUA TOWM" />
              <Picker.Item label="PODIYADI" value="PODIYADI" />
              <Picker.Item label="CHRY RLWY" value="CHRY RLWY" />
              <Picker.Item label="KAYAMKULAM" value="KAYAMKULAM" />
              <Picker.Item label="MAVELIKKARA" value="MAVELIKKARA" />
              <Picker.Item label="CHANGANACHERRY -BYPASS" value="CHANGANACHERRY -BYPASS" />
              <Picker.Item label="MALLAPPALLY" value="MALLAPPALLY" />
              <Picker.Item label="KARUKACHAL" value="KARUKACHAL" />
              <Picker.Item label="THIRUVALLA" value="THIRUVALLA" />
              <Picker.Item label="THOTTABHAGOM" value="THOTTABHAGOM" />
              <Picker.Item label="ETTUMANOOR TOWN" value="ETTUMANOOR TOWN" />
              <Picker.Item label="MEDICAL COLLEGE" value="MEDICAL COLLEGE" />
              <Picker.Item label="BAKER JN." value="BAKER JN." /> 
              <Picker.Item label="COLLECTORATE" value="COLLECTORATE" />
              <Picker.Item label="DEVALOKAM" value="DEVALOKAM" />
              <Picker.Item label="PAMPADY" value="PAMPADY" />
              <Picker.Item label="PUTHUPPALLY" value="PUTHUPPALLY" />
              <Picker.Item label="MANGANAM KURISU" value="MANGANAM KURISU" />
              <Picker.Item label="PALA" value="PALA" />
              <Picker.Item label="KIDANGOOR JN" value="KIDANGOOR JN" />
              <Picker.Item label="MANARCADU JN" value="MANARCADU JN" />
              <Picker.Item label="PONKUNNAM" value="PONKUNNAM" />
              <Picker.Item label="NJALIAKUZHY" value="NJALIAKUZHY" />
              <Picker.Item label="KANJIKUZHY" value="KANJIKUZHY" />
              <Picker.Item label="PATHANADU" value="PATHANADU" />
              <Picker.Item label="NAGAMPADOM" value="NAGAMPADOM" />
            </Picker>
              </Form>
            </CardItem>
            <CardItem footer button onPress={this.pass} style={{backgroundColor:'#0A559D'}}>
              <Text style={material.subheadingWhite}>Click here to get buses to SAINTGITS</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}