import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';

class App extends Component {

  state = {
    appName: 'My First App',
    random: [36, 999]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState((prevState)=>{
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    }) // filter 메소드는 배열객체 내장함수로 true를 리턴하는 요소를 대상으로
       // 새로운 배열을 만드는 메소드이다. 이때 실제로 num은 사용하지 않지만,
       // num 자리를 비울 경우, 요소값을 업데이트 하지않으므로 임의의 num을 전달.
    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        {/* <Header name={this.state.appName}/>
        <View>
          <Text
            style={styles.mainText}
            onPress={()=>alert('text touch event')}
          >
            Hello World
          </Text>
        </View>
        <Generator add={this.onAddRandomNum}/>
        <ScrollView
          style={{width: "100%"}}
          // onMomentumScrollBegin={()=>{alert("begin")}}
          // onMomentumScrollEnd={()=>{alert("end")}}
          // onScroll={()=>{alert("scrolling")}}
          // onContentSizeChange={(width, height) => alert(height)}
          bounces={true}
          >
        <NumList num={this.state.random} delete={this.onNumDelete}/>
        </ScrollView> */}
        <Input/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20
  }
})

export default App;
