import { StyleSheet, View, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import moment from 'moment'
import { MaterialIcons } from '@expo/vector-icons'
import _ from 'lodash'

const RenderRight = (progress, dragX) => {
  return (
    <View style={{backgroundColor:"red", alignItems: "center", justifyContent: 'center'}}>
      <Text style={[{color: "#ffffff", fontWeight: "600", padding:15}]}> <MaterialIcons name="snooze" /></Text>
    </View>
  )
}

export default function RenderItem(task, index){
  let item = task.item
  let total = _.reduce(item.History, (sum, i) => i.count+sum, 0)
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
          Started {item.Start.format("YYYY-MM-DD")}
        </Text>
        <Text>
          End {moment(item.End).format("YYYY-MM-DD")}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5}}>
        <Text>
          Completed {total}
        </Text>
        <Text> 
          Pace {pace}
        </Text>
        <Text> 
          History {_.size(_.filter(item.History, (v, date) => date <= new Date().toISOString().split('T')[0]))} 
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
