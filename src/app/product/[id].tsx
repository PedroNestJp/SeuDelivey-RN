import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";

export default function Product() {

    const { id } = useLocalSearchParams()
    const product = PRODUCTS.filter((item) => item.id == id)
    console.log(product)

    return (
        <View className="flex-1">
            
        </View>
    )
}