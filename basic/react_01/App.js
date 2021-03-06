import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Modal from './src/modal';
import Tree from './assets/images/tree.jpg';

class App extends Component {

  state = {
    appName: 'My First App',
    random: [36, 999],
    myTextInput: "temp",
    alphabet: ['a', 'b', 'c', 'd']
  }

onChangeInput = (event) => {
    this.setState({
        myTextInput: event
    })
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

  onAddTextInput = () => {
    this.setState((prevState) => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        {/* <Image
          style={styles.image}
          source={Tree}
          resizeMode="contain"
        /> */}
        <Modal/>
        <Image
          style={styles.image}
          source={{uri: "https://picsum.photos/id/237/200/300"}}
          resizeMode="contain"
          onLoadEnd={()=>alert("Image Loaded!!!")}
        />
        <Picker/>
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
        {/* <Input/> */}
        <TextInput // React Native에서 Data Flow는 부모 -> 자식 순이며, 자식의 데이터는 부모에게 전달 될 수 없다. 따라서 input.js의 Input 컴포넌트를
        // import해서 사용하는 것이 아니라, 그대로 붙여넣어서 사용. but, 이러한 문제를 해결하기 위해 recoil 등 사용 가능.
                value={this.state.myTextInput}
                style={styles.input}
                onChangeText={this.onChangeInput}
                multiline={true}
                maxLength={100}
                autoCapitalize={'none'}
                editable={true}
            />
        {/* <Button title="Add Text Input" onPress={this.onAddTextInput}/>
        <ScrollView style={{width: "100%"}}>
          {this.state.alphabet.map((item, idx)=>(
            <Text style={styles.mainText} key={idx}>
              {item}
            </Text>
          ))}
        </ScrollView> */}
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
    padding: 20,
    margin:20,
    backgroundColor: "pink"
  },
  input: {
    width: "100%",
    backgroundColor: "#cecece",
    marginTop: 20,
    fontSize: 25,
    padding: 10
  },
  image: {
    backgroundColor: "red",
    width: "100%",
    height: 700 
  }
})

export default App;
