import React from "react";
import { Modal, View, Text, Button, StyleSheet,ScrollView } from "react-native";
import DateTimePicker from './DateTimepicker';

class MemberDetail extends React.Component {

    state={
        datefilter:'',
        timeactivity:[]
    }

    handleFilter = (langValue) => {
        this.setState({datefilter: langValue});
    }

    render(){
        let modalContent = null;
        let timeactivity=null;
        if (this.props.memberselected) {
            modalContent = (
            <View>
                <Text style={styles.memberName}>{this.props.memberselected.real_name}</Text>
                <Text style={styles.tz}>{this.props.memberselected.tz}</Text>
                <Text style={styles.ti}>{this.props.memberselected.id}</Text>
                {/* <Text>{this.state.datefilter}</Text> */}
            </View>
            );
            timeactivity = this.props.memberselected.activity_periods.map((act,i) => (
                <View key={i}>
                    <Text style={styles.memberstarttime}>{act.start_time}</Text>
                    <Text style={styles.memberendtime}>{act.end_time}</Text>
                </View>
                ));
        }
            return (
                <Modal
                    onRequestClose={this.props.onModalClosed}
                    visible={this.props.memberselected !== null}
                    animationType="slide"
                    >
                    <View style={styles.modalContainer}>
                        {modalContent} 
                        <DateTimePicker onfilter={this.handleFilter}></DateTimePicker>
                        <ScrollView style={styles.timecontainer}>
                        {timeactivity}
                        </ScrollView>
                        <View style={styles.buttoncontainer}>
                        <Button style={styles.placebutton} title="Delete" color="red" onPress={this.props.onItemDeleted} />
                        <Button style={styles.placebutton} title="Close" onPress={this.props.onModalClosed} />
                        </View>
                    </View>
                </Modal>
            );
    }

}

const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    flexDirection:"column",
    margin: 22,
    justifyContent:"space-evenly"
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  memberName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30
  },
  timecontainer:{
      borderWidth:1,
      borderColor:"gray"
  },
  memberstarttime:{
    textAlign: "center",
    fontSize: 15,
    marginTop:40,
    color: "green"
  },
  memberendtime:{
    textAlign: "center",
    fontSize: 15,
    color: "red",
    borderBottomWidth:1,
    borderBottomColor:"#eee",
    borderRadius:50
  },
  placebutton: {
      width:"50%",
  },
  tz:{
      fontSize: 25,
      color:"brown",
      textAlign:"center"
  },
  ti:{
    fontSize: 28,
    textAlign:"center"
},
  buttoncontainer: {
    alignItems:"center",
}
});

export default MemberDetail;
