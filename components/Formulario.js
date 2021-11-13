import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Formulario({ agregarHobbie }) {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [hobbie, setHobbie] = useState('');

  const onChangeNombre = texto => {
    setNombre(texto);
  };

  const onChangeCarrera = texto => {
    setCarrera(texto);
  };

  const onChangeHobbie = texto => {
    setHobbie(texto);
  };

  return (
    <View>
      <View style={styles.titulo}>
        <Text style={styles.text}>Ingrese sus datos</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNombre}
          placeholder="Escriba su nombre"
          value={nombre}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCarrera}
          placeholder="Escriba su carrera"
          value={carrera}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeHobbie}
          placeholder="Hobbie"
          value={hobbie}
        />
        <Button
          disabled={!hobbie}
          title="Agregar hobbie"
          onPress={() => {
            agregarHobbie(hobbie);
            setHobbie('');
          }}
        />
      </View>
      <View style={styles.resultado}>
        {!!nombre && <Text style={styles.text}>Hola, {nombre}</Text>}
        {!!carrera && <Text style={styles.text}>Carrera: {carrera}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  input: {
    height: 40,
    margin: 12,
    width: 250,
    borderWidth: 1,
    padding: 10,
  },
  titulo: {
    paddingTop: 80,
  },
  resultado: {
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
