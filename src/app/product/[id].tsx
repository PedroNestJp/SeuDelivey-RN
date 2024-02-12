import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";

export default function Product() {

    const { id } = useLocalSearchParams()
    const product = PRODUCTS.filter((item) => item.id == id)[0]
    console.log(product)

    return (
        <View className="flex-1">
            <Image
                source={product.cover}
                className="w-full h-52"
                resizeMode="cover" />
            <View className="p-5 ">
                <Text className="font-heading text-lg text-lime-400">
                    {product.price}
                </Text>
            </View>
        </View>
    )
}