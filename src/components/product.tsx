import { forwardRef } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ProductDataProps = {
    title:string,
    description:string,
    thumbnail:ImageProps,
}

type ProductProps = TouchableOpacityProps & {
    data:ProductDataProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps> (({ data , ...rest}, ref) => {
    return(
        <TouchableOpacity
         className="w-full flex-row items-center pb-4 " {...rest}
         ref={ref}
         >
            <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
            <View className="flex-1 ml-3 p-2 ">
                <Text className="text-slate-100 font-subTitle text-base"> {data.title} </Text>
                <Text className="text-slate-400 text-xs leading-4 "> {data.description} </Text>
            </View>
        </TouchableOpacity>
    )
})