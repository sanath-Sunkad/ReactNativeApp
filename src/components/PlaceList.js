import React from "react";
import {ScrollView, Text, StyleSheet, FlatList} from "react-native";
import ListItem from "./ListItem"

const PlaceList =(props)=>{

    const placesOutput = props.places.map((place,i) => (
    <ListItem 
    key={i} 
    placeName={place}
    onItemPressed={() => props.onItemDeleted(i)}
    />));
    return(
        <ScrollView style={styles.listcontainer}>
        {placesOutput}
      </ScrollView>
    );
    };

const styles = StyleSheet.create({
    listcontainer:{
        width:"100%",
        paddingTop:20,
      }
});

export default PlaceList;