import React, { Component } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import {Picker} from "@react-native-community/picker"

class Input extends Component {

    state = {
        country: "korea"
    }

    render() {
        return (
            <View style={styles.container}>
            <Picker
                style={{height: 50, width: 250}}
                selectedValue={this.state.country}
                onValueChange={(val, idx)=>{
                    this.setState({country: val})
                }}
            >
                <Picker.Item label="Korea" value="korea"/>
                <Picker.Item label="Canada" value="canada"/>
            </Picker>
            <Text>Hello World</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: "center"
    }
})

export default Input