import React, { Component } from 'react';
 import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
 
const Header = (props) => ( // JSX Component를 리턴
    <TouchableOpacity
        style={styles.header}
        onPress={()=>alert('hello world')}
        // onLongPress={()=>alert('hello world')}
        // onPressIn={()=>alert('hello world')}
        // onPressOut={()=>alert('hello world')}
    >
        <View>
            <Text> {props.name} </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})

 export default Header;
 