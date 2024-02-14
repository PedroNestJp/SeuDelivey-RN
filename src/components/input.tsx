import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input ({...rest} : TextInputProps) {
    return (
        <TextInput
            placeholderTextColor={colors.slate[400]}
            multiline
            textAlignVertical="top"
            className="h-32 bg-slate-800 p-4 px-4 py-4 rounded-md font-body text-white" {...rest}/>
    )
}