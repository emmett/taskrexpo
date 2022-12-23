import { StyleSheet, View, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import moment from 'moment'
import { MaterialIcons } from '@expo/vector-icons'

const RenderRight = (progress, dragX) => {
  return (
    <View style={{backgroundColor:"red", alignItems: "center", justifyContent: 'center'}}>
      <Text style={[{color: "#ffffff", fontWeight: "600", padding:15}]}> <MaterialIcons name="snooze" /></Text>
    </View>
  )
}

export default function RenderItem(task, index){
  let item = task.item
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

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#cccccc",
    shadowOffset: {width: 3, height: 3},
    marginVertical: 10,
    shadowOpacitcy: .9
  }
});
