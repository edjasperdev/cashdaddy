/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase'
import Login from './Login'
import BudgetView from './Budget/BudgetView'
import Loader from './Loader'



export default class App extends Component {
  state = { loggedIn: null }
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCu5qwVX2jKWFQbNB0mEBomvLlR75MtEz4",
      authDomain: "cashdaddy-8248.firebaseapp.com",
      databaseURL: "https://cashdaddy-8248.firebaseio.com",
      projectId: "cashdaddy-8248",
      storageBucket: "cashdaddy-8248.appspot.com",
      messagingSenderId: "810059269485"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderInitialView(){
    switch(this.state.loggedIn){
      case true:
        return <BudgetView/>
      case false:
        return <Login/>
      default:
        return <Loader size="large"/>
    }
  }

  render(){
    return (
      <View style={styles.container}>
        {this.renderInitialView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

