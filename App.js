import React, { Component } from 'react'
import { Modal, Platform, KeyboardAvoidingView, TouchableOpacity, StyleSheet, View, Dimensions, Text, SafeAreaView } from 'react-native';
import TaskList from './components/taskList';
import { Data }from './data/data'

//Set the width to screen sizes for resizeing
const {width, height} = Dimensions.get('screen')

// Render the right actions

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <TaskList data={Data} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.addTaskWrapper}>
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  item: {
    padding: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#cccccc",
    shadowOffset: {width: 3, height: 3},
    marginVertical: 10,
    shadowOpacitcy: .9
  },
  addTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  addText: {
    fontSize: 25,
    color: "#FFF",
  },
  addWrapper: {
    backgroundColor: "#1AA7EC",
    width: 60,
    height: 60,
    padding: 15,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    justifyContent: 'center',
    alignItems: 'center'
  }
});
