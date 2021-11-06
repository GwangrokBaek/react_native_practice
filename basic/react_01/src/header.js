import React, { Component } from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 
const Header = (props) => ( // JSX Component를 리턴
    <View style={styles.header}>
        <Text> {props.name} </Text>
    </View>
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
 