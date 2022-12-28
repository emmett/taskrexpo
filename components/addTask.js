import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button,  } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import moment from 'moment'
let start = moment('2022-12-01')
let end = moment('2023-12-31')

let count = end.diff(start, 'days')
let data = {}
let temp = start
for (var i = 0; i <= count; i++){
  let date = new Date(start + i * 1000 * 60 * 60 * 24).toISOString().split('T')[0]
  data[date] = {
    count: date < new Date().toISOString().split('T')[0]? Math.ceil(Math.random() * 55) : 0,
    goal: 55
  }
}

const Task = {
  "Task": "Pushups",
  "Goal": 20000,
  "History": data, 
  "Start": start,
  "End": end
} 

export default function AddTask(props) {
  let { AddTaskFunction } = props
  
  const getPace = (task) => {
    return Math.ceil(Number(task.Goal)/(getLength(task.Start, task.End)))
  }

  const getLength = (start, end) => {
    let delta = new Date(end).valueOf()-new Date(start).valueOf()
    return (delta/(1000 * 60 * 60 * 24))
  }

  const handleSubmit = () => {
    let history = {}
    let pace = getPace({
      Start: startDate,
      End: endDate,
      Goal: number
    })

    for (var i = 0; i <= count; i++){
      let date = new Date(start + i * 1000 * 60 * 60 * 24).toISOString().split('T')[0]
      history[date] = {
        count: 0,
        goal: pace
      }
    }
    AddTaskFunction({
      Goal: number,
      Task: title,
      Start: start,
      End: end,
      History:  history
    })
  };
  
  const [title, onChangeTitle] = React.useState("");
  const [number, onChangeNumber] = React.useState(20000);

  const [startDate, setStartDate] = React.useState(new Date())

  const [endDate, setEndDate] = React.useState(new Date(new Date().valueOf() + 365 * 1000 * 60 * 60 * 24))
  
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };
  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleEndConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideEndDatePicker();
  }

  const handleStartConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideStartDatePicker();
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Add A Task</Text>
    <Text>How Many</Text>
    <TextInput
      style={styles.input}
      keyboardType = 'number-pad'
      onChangeText={onChangeNumber}
      value={number}
    />
    <Text>What</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeTitle}
      value={title}
    />
    
    <Button onPress={() => {
        showStartDatePicker()
      } 
    }
    title={startDate.toISOString().split('T')[0]} 
    />

    <Button  
      onPress={showEndDatePicker}
      title={endDate.toISOString().split('T')[0]} 
    />

    <DateTimePickerModal
      isVisible={isStartDatePickerVisible}
      mode="date"
      onConfirm={handleStartConfirm}
      onCancel={hideStartDatePicker}
    />

    <DateTimePickerModal
      isVisible={isEndDatePickerVisible}
      mode="date"
      onConfirm={handleEndConfirm}
      onCancel={hideEndDatePicker}
    />

    <Button onPress={handleSubmit} title={'Add Task'} />
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
  