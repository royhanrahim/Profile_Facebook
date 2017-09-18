/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Image
} from 'react-native';

import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, Item, Input, FooterTab, Footer} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'white',}}>
          <Header searchBar rounded>
              <Left>
                <Button small transparent>
                  <Icon name="ios-arrow-back" />
                </Button>
              </Left>

              <Body>
                <Item rounded style={{width:270, backgroundColor:'white', marginLeft:-37}}>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                </Item>
              </Body>
              
              <Right>
                <Button small transparent>
                  <Icon name="ios-settings" />
                </Button>
              </Right>
          </Header>
        <Content>

          <View style={styles.backOne}>
            <Image source={require('./img/lamb.jpg')} style={{width:360, height:150}} />
          </View>

          <View style={styles.backTwo}>
            <Image source={require('./img/1.png')} style={{width:120, height:120}} />
          </View>

          <View style={styles.backThree}>
            
          </View>

          <View style={styles.backFour}>
            <Text>Lamborghini</Text>
          </View>

          <FooterTab style={styles.menuOne}>
            <Button vertical>
              <Icon name="ios-create" />
              <Text style={styles.textOne}>New Post</Text>
            </Button>
            <Button vertical>
              <Icon name="people" />
              <Text style={styles.textOne}>Update Info</Text>
            </Button>
            <Button vertical>
              <Icon active name="ios-list-box" />
              <Text style={styles.textOne}>Activity Log</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-more" />
              <Text style={styles.textOne}>More</Text>
            </Button>
          </FooterTab>

          <View style={styles.backFive}>
            <Text>Saya seorang Hacker, Cracker, Creating, Killer, dan masih banyak lagi ...</Text>
            <Button full transparent>
              <Text>Edit</Text>
            </Button>
          </View>

          <View style={styles.backSix}>
            <Item style={{padding:5}}>
              <Icon name="ios-briefcase" />
              <Text>Work at Google</Text>
            </Item>
            <Item style={{padding:5}}>
              <Icon name="ios-home" />
              <Text>Live in Manchester, England</Text>
            </Item>
            <Item style={{padding:5}}>
              <Icon name="ios-school" />
              <Text>Studied at High School Elementary{'\n'} Wikrama</Text>
            </Item>
            <Item style={{padding:5}}>
              <Icon name="ios-navigate" />
              <Text>From Jakarta, Indonesia</Text>
            </Item>
            <Item style={{padding:5}}>
              <Button small transparent>
                <Text>Edit</Text>
              </Button>
            </Item>
          </View>

          <View style={styles.backSeven}>
            <Item>
              <Left>
                <Text>FEATURED PHOTOS</Text>
              </Left>
              <Right>
                <Button small transparent>
                  <Text>Edit</Text>
                </Button>
              </Right>
            </Item>
            <Item style={{marginBottom:5}}>
              <Image source={require('./img/2.jpg')} style={{width:180, height:150, marginRight:5}} />
              <Image source={require('./img/3.jpg')} style={{width:180, height:150}} />
            </Item>
            <Item>
              <Image source={require('./img/4.jpg')} style={{width:115, height:120, marginRight:5}} />
              <Image source={require('./img/5.jpg')} style={{width:115, height:120, marginRight:5}} />
              <Image source={require('./img/6.jpg')} style={{width:115, height:120}} />
            </Item>
          </View>
        </Content>

        <Footer>
          <FooterTab style={styles.menuTwo}>
            <Button vertical style={{padding:2}}>
              <Icon name="ios-paper" />
            </Button>
            <Button vertical>
              <Icon name="ios-people" />
            </Button>
            <Button vertical>
              <Icon active name="ios-chatboxes" />
            </Button>
            <Button vertical>
              <Icon name="globe" />
            </Button>
            <Button vertical>
              <Icon name="ios-list" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

  backOne: {
    backgroundColor:'#000',
    width:360,
    height:150,
    zIndex:0,
  },
  backTwo: {
    backgroundColor:'#B39DDB',
    width:120,
    height:120,
    zIndex:1,
    position:'absolute',
    marginLeft:125,
    marginTop:90
  },
  backThree: {
    width:360,
    height:60,
    zIndex:0,
  },
  backFour:{
    padding:10,
    alignItems:'center'
  },
  backFive:{
    padding:10,
    alignItems:'center',
  },
  backSix:{
    padding:10,
  },  
  backSeven:{
    padding:5
  },

  menuOne:{
    backgroundColor:'white',
  },
  menuTwo:{
    backgroundColor:'#6A1B9A',
  },
});

AppRegistry.registerComponent('Facebook', () => App);
