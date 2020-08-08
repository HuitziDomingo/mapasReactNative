import React from 'react';
import {Text, View, StyleSheet, FlatList, Button, Dimensions} from 'react-native';

export default ({ puntos, closeModal }) => {
    return(
        <>
        <View style={styles.list}>
            <FlatList 
                data={puntos.map(x => x.name)}
                renderItem={({ item }) =>
                <>
                    {/* <View style={styles.tituloLista}><Text> Lista de Lugares. </Text></View>  */}
                    <View style={styles.item}><Text> {item} </Text></View> 
                </>
                }
                keyExtractor={item =>item}
            />
        </View>
        <View styles={styles.button}>
            <Button title="Cerrar" onPress={closeModal} />
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height - 350,
        //width: Dimensions.get('window').width 
    },
    tituloLista: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    item:{
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        // alignItems: 'center',
        //padding: 20
    },
    button: {
        paddingBottom: 15
    }
});