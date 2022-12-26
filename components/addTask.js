import { View, Text } from 'react-native';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { SafeAreaView } from 'react-native';

export default function AddTask() {
  const handleSubmit = () => {
    console.log('Submitted')
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello</Text>
    </View>
  );
}