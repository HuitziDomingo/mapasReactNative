import React from 'react';
import { StyleSheet, Dimensions, Modal, View, Text } from 'react-native'

export default ({children, visibility}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibility}
        >
            <View style={styles.center}>
                <View style={styles.modalView}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
        // height: Dimensions.get('window').height + 200
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        minWidth: Dimensions.get('window').width - 100
    },
})