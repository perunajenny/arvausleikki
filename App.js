import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [arvaus, setArvaus] = useState ('');
  const [teksti, setTeksti] = useState ('Guess a number between 1-100');
  const [kohde, setKohde] = useState([]);
  const [lkm, setLkm] = useState(1)

  const luoNumero = () => {
    const numero = Math.floor(Math.random() * 100) + 1 ;
    setKohde([numero])
  }

  useEffect(() => luoNumero(), []);

  const makeGuess = () => {

    setLkm(lkm +1)

    if (arvaus < kohde) {
      setTeksti("Your guess " + arvaus + " is too low")
    }
    else if (arvaus > kohde) {
      setTeksti("Your guess " + arvaus + " is too high")
    }
    else {
      Alert.alert("You guessed the number in " + lkm + " guesses")
    };
  }

  return (
    <View style={styles.container}>
      <Text>{teksti}</Text>
      <TextInput keyboardType='numeric' style={styles.input} onChangeText={arvaus => setArvaus(arvaus)} value={arvaus}/>
        <View style={styles.button}>
      <Button onPress={makeGuess} title="Make guess" />
      </View>
     
      <StatusBar style="auto" />
      </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width: 75 ,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button : {
    padding: 20,
  },
});