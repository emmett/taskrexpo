import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

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

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddTask">
        <Stack.Screen name="Home" >
          {(props) => <TaskList {...props} Data={Data} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="AddTask" component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
