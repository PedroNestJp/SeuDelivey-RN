
import { Modal, Text, View, ModalProps, Pressable } from 'react-native';
import { Button } from './button';
import { useState } from 'react';

type ModalCustomProps = ModalProps & {
  modalMessage: string
}

const ModalCustom = ({ modalMessage, visible, onRequestClose }: ModalCustomProps) => {
  
  const [modalVisible, setModalVisible] = useState(false)


  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={onRequestClose} // Configura a função de fechamento do modal
      >
      <Pressable className='flex-1 justify-center' onPress={onRequestClose}>
        <View
          className='flex-1 justify-center'>
          <View className='items-center bg-slate-100 rounded-md m-4 p-4'>
            <Text className='text-xl font-heading text-slate-800 m-4'>{modalMessage}</Text>
            <Button onPress={()=> setModalVisible(false)}>
              <Button.Text> fechar </Button.Text>
            </Button>
          </View>
        </View>
      </Pressable>
    </Modal>
    
  );
};

export default ModalCustom;