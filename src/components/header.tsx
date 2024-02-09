import { Feather } from "@expo/vector-icons";
import { Image, Text, View, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";

type HeaderProps = {
    title: string,
    cartQuantityItems: number,
}

export function Header({ title, cartQuantityItems }: HeaderProps) {
    return (
        <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5 ">
            <View className="flex-1">
                <Image source={require('@/assets/logo.png')} className="h-6 w-32" />
                <Text className="text-white text-lg font-heading mt-5"> {title} </Text>
            </View>
            {cartQuantityItems > 0 &&
                <TouchableOpacity className="relative" activeOpacity={0.7}>
                    <View className="bg-lime-300 w-5 h-5 rounded-full items-center justify-center top-3 z-10 -right-2.5">
                        <Text className=" text-xs font-bold text-slate-900">
                            {cartQuantityItems}
                        </Text>
                    </View>
                    <Feather name="shopping-bag" size={24} color={colors.white} />
                </TouchableOpacity>}
        </View>
    )
}