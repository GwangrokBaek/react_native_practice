import React, { Component } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"

class Input extends Component {

    state = {
        myTextInput: "temp"
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput: event
        })
    }

    render() {
        return (
            <View style={styles.mainView}>
            <TextInput // 플랫폼(iOS, Android)별로 default 네이티브 속성이 달라서 안드로이드와 iOS에서 보이는 TextInput UI가 다르다. 
                value={this.state.myTextInput}
                style={styles.input}
                onChangeText={this.onChangeInput}
                multiline={true}
                maxLength={100}
                autoCapitalize={'none'}
                editable={true}
            />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: "100%"
    },
    input: {
        width: "100%",
        backgroundColor: "#cecece",
        marginTop: 20,
        fontSize: 25,
        padding: 10
    }
})

export default Input