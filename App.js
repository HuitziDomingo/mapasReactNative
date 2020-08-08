//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Map, Modal, Panel, Input, List} from './components';

export default function App() {
  var [puntos, setPuntos] = useState([])
  var [puntoTemp, setPuntoTemp] = useState({})
  var [nombre, setNombre] = useState('')
  var [visibilityFilter, setVisibilityFilter] = useState('new_punto') //Nuevo punto O todos los puntos
  var [visibility, setVisibility] = useState(false)
  var [pointsFilter, setPointsFilter] = useState(true)

  //Funcion de ocultar puntos
  var togglePointsFilter = () => setPointsFilter(!pointsFilter)

  //Conseguir las cordenadas del mapa
  var handLongPress = ({nativeEvent}) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  //Funcion del input  para colocar nombre
  var handleChangeText = text => setNombre(text)

  //Colocar el nombre de las cordenadas
  var handleSubmit = () => {
    var newPunto = {coordinate: puntoTemp, name: nombre,}
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  //Lista
  var handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }


  return (
    <View style={styles.container}>
      <Map onLongPress={handLongPress} puntos={puntos} pointsFilter={pointsFilter} />
      <Panel onPressLeft={handleLista} textLeft="Lista" togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility}>
        {
          visibilityFilter === "new_punto"
          ?
          <>
            <Input
              title="Nombre"
              placeholder="Nombre del punto"
              onChangeText={handleChangeText}
            />
            <Button title="Aceptar" onPress={handleSubmit} />
          </>
          :
          <List puntos={puntos} closeModal={() => setVisibility(false)} />
        } 
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
