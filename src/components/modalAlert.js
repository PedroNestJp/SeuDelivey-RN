import { ModalProps, Pressable, TouchableOpacity, View } from "react-native";
import { Button } from "./button";
import { Text } from "react-native";


const ModalAlert = ({ message, onClose, ...rest } ) => {
    return (
        <TouchableOpacity className='flex-1 justify-center' onPress={onClose} {...rest}>
            <View
                className='flex-1 justify-center'>
                <View className='items-center bg-slate-100 rounded-md m-4 p-4'>
                    <Text className='text-xl font-heading text-slate-800 m-4'>{message}</Text>
                    <Button onPress={message}>
                        <Button.Text> fechar </Button.Text>
                    </Button>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default ModalAlert