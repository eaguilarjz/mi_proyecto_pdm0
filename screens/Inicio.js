import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Alert, Button } from 'react-native';
import Formulario from '../components/Formulario';
import ListaHobbies from '../components/ListaHobbies';

export default function Inicio({ navigation }) {
  const [hobbies, setHobbies] = useState([]);

  const agregarHobbie = hobbie => {
    if (hobbie.trim().length > 3) {
      setHobbies([...hobbies, { titulo: hobbie, id: hobbies.length + 1 }]);
    } else {
      Alert.alert('Ups!', 'El hobbie es muy corto', [
        { text: 'Aceptar', onPress: () => console.log('Se presionó Aceptar') },
      ]);
    }
  };

  const eliminarHobbie = id => {
    Alert.alert(
      'Confirmación',
      '¿Está seguro que desea eliminar este hobbie?',
      [
        {
          text: 'Sí',
          onPress: () => setHobbies(hobbies.filter(item => item.id !== id)),
        },
        {
          text: 'No',
          onPress: () => console.log('El usuario canceló la acción'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Formulario agregarHobbie={agregarHobbie} />
      <ListaHobbies hobbies={hobbies} eliminarHobbie={eliminarHobbie} />
      <Button title="Ir a About" onPress={() => navigation.navigate('About')} />
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
});
