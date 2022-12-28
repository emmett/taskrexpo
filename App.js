import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Components
import TaskList from './components/taskList';
import AddTask from './components/addTask.js'; 

// Import Test Data
import { Data } from "./data/data.js"

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function App() {
  const Tab = createBottomTabNavigator();
  const [tasks, setTasks] = useState(Data);  

  const addTaskFunction = (task) => {
    let tmp = tasks.concat([task])
    console.log(tmp.length)
    setTasks(tmp)
  }
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" >
          {(props) => <TaskList {...props} Data={tasks} />}
        </Tab.Screen>
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="AddTask">
          {(props) => <AddTask {...props} AddTaskFunction={addTaskFunction}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
