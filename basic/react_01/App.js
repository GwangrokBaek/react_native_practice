/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropsChild from './propsChild';

class App extends Component {
  
  state = {
    sampleText: "Hello World",
    sampleNum: 1,
    sampleBoolean: false
  }

  onAdd = () => {
    this.setState(prevState => {
      return{
        sampleNum: prevState.sampleNum + 1
      }
    }, this.showMsg)
  }

  changeState = () => {
    if (this.state.sampleBoolean) {
      this.setState({
        sampleText: "Hi World",
        sampleBoolean: false
      })
    } else {
      this.setState({
        sampleText: "Hello World",
        sampleBoolean: true
      })
    }
  }

  showMsg = () => {
    console.log(this.state.sampleNum)
  }
  
  render() {
    return (
      <View style={styles.background}>
        <PropsChild sampleText={this.state.sampleText} changeState={this.changeState}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;
