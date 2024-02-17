import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { Styles } from '@/app/styles/styles';
import { Button } from './button';

type ModalProps = {
    modalMessage: string
}

const ModalCustom = ({modalMessage} : ModalProps) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={Styles.centeredView}>
      <Modal
        // animationType="slide"
        transparent
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
        >
            
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button>
                <Button.Text  > ddd </Button.Text>
            </Button>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text >Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalCustom;