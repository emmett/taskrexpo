import Task from './task';
import { FlatList, View} from 'react-native';


export default function TaskList(props) {
    let tasks = props.Data
    return (
      <View>
        <FlatList data={tasks} renderItem={({item, index}) => {
            return (
              <Task item={item} index={index}/> 
            )
          }
        }/>
      </View>
    )
}