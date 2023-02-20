import React, {Component} from "react";

import {View, Text, StyleSheet } from "react-native";


export default class Detailscreen extends Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text> PANTALLA DE INICIO </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})