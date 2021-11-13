import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// ES6 (EcmaScript 6)
// Object destructuring
function ListaHobbies({ hobbies, eliminarHobbie }) {
  return (
    <View style={styles.lista}>
      <FlatList
        data={hobbies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.hobbie}>
            <Text>{item.titulo}</Text>
            <TouchableOpacity onPress={() => eliminarHobbie(item.id)}>
              <View style={styles.icono}>
                <MaterialIcons name="delete" size={24} color="gray" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lista: {
    flex: 1,
    marginTop: 30,
  },
  hobbie: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
  },
  icono: {
    marginLeft: 20,
  },
});

export default ListaHobbies;
