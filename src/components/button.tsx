import { ReactNode } from "react";
import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";


type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}

type ButtonTextProps = TouchableOpacityProps & {
    children: ReactNode
}

type ButtonIconProps = TouchableOpacityProps & {
    children: ReactNode
}

function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            className="bg-lime-400 rounded-md items-center justify-center flex-row p-2 m-2"
            activeOpacity={0.7}
            {...rest}>
                {children}
            
        </TouchableOpacity>
    )

}

function ButtonText({ children, ...rest }: ButtonTextProps) {
    return (
        <Text className="text-black text-base font-heading mx-2" {...rest}>
            {children}
        </Text>
        )
}

function ButtonIcon({ children }: ButtonIconProps) {
    return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
