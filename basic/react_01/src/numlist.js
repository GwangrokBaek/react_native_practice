import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
 
const NumList = (props) => {
    console.log(props.num.map((item, idx) => (
        <View style={styles.numList} key={idx}>
            <Text> {item} </Text>
        </View>
    )))

    return (
    props.num.map((item, idx) => (
        <TouchableOpacity style={styles.numList} key={idx} onPress={()=>props.delete(idx)}>
        <View>
            <Text> {item} </Text>
        </View>
        </TouchableOpacity>
    )) // 위 JSX 구문이 Object 타입으로서 새로운 배열의 요소로 할당됨
    )
}

const styles = StyleSheet.create({
    numList: {
        backgroundColor: '#cecece',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        marginTop: 5
    }
})

 export default NumList;
 