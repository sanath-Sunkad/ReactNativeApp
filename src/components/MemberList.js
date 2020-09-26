import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import ListItem from "./ListItem"

const MemberList =(props)=>{

    const memberOutput = props.jsdata.members.map((member) => (
    <ListItem 
    key={member.id} 
    placeName={member}
    onItemPressed={() => props.onItemSelected(member.id)}
    />));
    return(
        <ScrollView style={styles.listcontainer}>
        {memberOutput}
      </ScrollView>
    );
    };

const styles = StyleSheet.create({
    listcontainer:{
        width:"100%",
        paddingTop:20,
      }
});

export default MemberList;