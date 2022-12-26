import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

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

  const handleSubmit = () => {
    console.log('Submitted')
    AddTaskFunction(Task)
  };

  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
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

