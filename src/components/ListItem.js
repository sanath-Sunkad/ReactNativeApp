import React from "react";
import {View, Text, StyleSheet, TouchableNativeFeedback} from "react-native";

const listItem =(props)=>(
    <TouchableNativeFeedback onPress={props.onItemPressed}>
        <View style={stylees.listItem}>
        <Text>
            {props.placeName.real_name}
        </Text>
    </View>

    </TouchableNativeFeedback>
    
);

const stylees = StyleSheet.create({
    listItem: {
      width:"100%",
      marginBottom:5,
      borderRadius:20,
      padding:15,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
});

export default listItem;