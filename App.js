import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(0);

  const onclickhandler = () => {
  setCount(() => count + 5);
  setClick(() => click + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button style={styles.button} title="Add" onPress={onclickhandler}></Button>
      <Text style={styles.text}>You clicked {click} times!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    borderRadius: 5,
    backgroundColor: 'lightblue'
  },
  text: {
    color: "white"
  }
  
});
