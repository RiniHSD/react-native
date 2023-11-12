import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Countnumber = () => {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)}/>
      <Button style={styles.button} title="Reset" onPress={() => setNumber(0)} color="red" />
    </View>
  );
};

export default Countnumber;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      margin: 10,
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 50,
    }
   })
   