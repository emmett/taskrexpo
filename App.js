import { StyleSheet, View, Dimensions, Text, SafeAreaView } from 'react-native';
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
  }
});
