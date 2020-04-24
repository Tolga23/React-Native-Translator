// components/dashboard.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
import Translator from '../components/Translator';




export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>
<Translator />


<View style={styles.button}>
        <Button 
          color="#04d191"
          title="Logout"
          
          onPress={() => this.signOut()}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 0,
    right: 0,
    top: 10,
    
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  textStyle: {
    fontSize: 20,
    marginBottom: 20,
    top:15,
  },
  button: {
  
    bottom: 0,
    left: 135,
  }
});