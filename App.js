import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemberList from './src/components/MemberList';

import MemberDet from './src/components/MemberDet'

import JSON from './TestJSON.json'

export default class App extends Component {
  state={
    data:JSON,
    places:[],
    memberselected: null
  }

  placeDeletedHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return i !== index;
        })
      };
    });
  };



  modalClosedHandler = () => {
    this.setState({
      memberselected: null
    });
  };


  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        memberselected: prevState.data.members.find(member => {
          return member.id === key;
        })
      };
    });
  };

  render(){
    return (

      <View style={styles.container}>
        <Text style={{fontSize:30}}>Members List</Text>
        <MemberDet memberselected={this.state.memberselected}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}></MemberDet>
        <MemberList jsdata={this.state.data} onItemSelected={this.placeSelectedHandler}></MemberList>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth:1
  },
});
