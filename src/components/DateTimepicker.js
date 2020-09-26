import React, {useState} from 'react';
import {View, Button, Platform,Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


  const App = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const m=date.getMonth();
  const d=date.getDate();
  const y=date.getFullYear();
  const formatdate=month[m]+" "+d+" "+y;


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    props.onfilter(formatdate);
  };


  const onPress =()=>{
    
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };



  return (
    <View>
        
      <View>
        <Button onPress={showDatepicker} title=" date !" />
        <Text style={{textAlign:"center"}} >{formatdate}</Text>
      </View>
      {/* <View>
        <Button onPress={showTimepicker} title=" time !" />
      </View> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          onPress={onPress}
        />
      )}
    </View>
  );
};

export default App;