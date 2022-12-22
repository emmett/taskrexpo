import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Tasks } from './data/tasks'
import moment from 'moment'
import { MaterialIcons } from '@expo/vector-icons'


//Set the width to screen sizes for resizeing
const {width, height} = Dimensions.get('screen')

// Render the right actions
const RenderRight = (progress, dragX) => {
  return (
    <View style={{backgroundColor:"red", alignItems: "center", justifyContent: 'center'}}>
      <Text style={[{color: "#ffffff", fontWeight: "600", padding:15}]}> <MaterialIcons name="snooze" /></Text>
    </View>
  )
}

const RenderItem = ({item, index}) => {
  let total = item.History.reduce((sum, i) => sum+i, 0)
  let days = moment(item.End).diff(moment(item.Start), 'days')
  let daysCompleted = moment().diff(moment(item.Start), 'days')
  let daysLeft = moment(item.End).diff(moment(), 'days') 
  let pace = Math.ceil((item.Goal - total) / daysLeft)
  return (
    <Swipeable renderRightActions={RenderRight}>
    <View style={styles.item}>
      <Text style={{fontWeight: '600'}}>{item.Goal} {item.Task} in {days > 1 ? days + " days" : days + " day"}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5}}>
        <Text>
          Started {moment(item.Start).format("YYYY-MM-DD")}
        </Text>
        <Text>
          End {moment(item.End).format("YYYY-MM-DD")}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5}}>
        <Text>
          Completed {item.History.reduce((sum, i) => sum+i, 0) }
        </Text>
        <Text> 
          Pace {pace}
        </Text>
        <Text> 
          History {item.History.length} 
        </Text>
       
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5}}>
        <Text>
          Days Completed {daysCompleted}
        </Text>
        <Text> 
          Days Left {daysLeft}
        </Text>
      </View>
    </View>
  </Swipeable>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <FlatList data={Tasks} renderItem={({item, index}) => {
          return (
            <RenderItem item={item} index={index}/> 
          )
        }
      }/>
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
