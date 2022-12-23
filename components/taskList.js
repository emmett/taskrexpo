import RenderItem from './renderItem';
import { FlatList, Text, View} from 'react-native';


export default function TaskList(props) {
    console.log(props.data)
    let tasks = props.data

    return (
      <View>
        <FlatList data={tasks} renderItem={({item, index}) => {
            return (
              <RenderItem item={item} index={index}/> 
            )
          }
        }/>
      </View>
    )
}