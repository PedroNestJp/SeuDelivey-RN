import { forwardRef } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ProductDataProps = {
    title: string,
    description: string,
    thumbnail: ImageProps,
    quantity?: number,
}

type ProductProps = TouchableOpacityProps & {
    data: ProductDataProps
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(({ data, ...rest }, ref) => {

    return (
        <TouchableOpacity
            className="w-full flex-row items-center pb-4 " {...rest}
            ref={ref}
        >
            <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
            <View className="flex-1 ml-4">
                <View className="flex-row items-center">
                    <Text
                        className="text-slate-100 font-subTitle text-base flex-1">
                        {data.title}
                    </Text>

                    {data.quantity &&
                        <Text
                            className="text-slate-100 text-sm font-subTitle">
                            X{data.quantity}
                        </Text>
                    }
                </View>
                <Text
                    className="text-slate-400 text-xs leading-4 ">
                    {data.description}
                </Text>

            </View>

        </TouchableOpacity>
    )
})