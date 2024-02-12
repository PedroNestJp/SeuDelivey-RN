import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { FunctionCurency } from "@/utils/functions/function-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons"
import { LinkButton } from "@/components/linkButton";

export default function Product() {

    const { id } = useLocalSearchParams()
    const product = PRODUCTS.filter((item) => item.id == id)[0]
    console.log(product)

    return (
        <View className="flex-1">
            <Image
                source={product.cover}
                className="w-full h-52"
                resizeMode="cover"
            />

            <View className="p-5 mt-8 flex-1">
                <Text className="text-slate-400 text-base font-bold">
                    {product.title}
                </Text>
                <Text
                    className="font-heading text-2xl text-lime-400 my-5">
                    {FunctionCurency(product.price)}
                </Text>

                <Text
                    className="text-slate-400 text-base leading-4 font-body mb-5 ">
                    {product.description}
                </Text>

                {product.ingredients.map((ingredient) => (
                    <Text
                        key={ingredient}
                        className="text-slate-400 text-base font-body "
                    >
                        {"\u2022"} {ingredient}
                    </Text>
                ))}

            </View>
            <View className="p-4 pb-8">
                <Button >
                    <Button.Icon>
                        <Feather name="plus-circle" size={20}/>
                    </Button.Icon>
                    <Button.Text> Adicionar ao pedido </Button.Text>
                </Button>
                <LinkButton className="mt-2" title="Voltar ao Cardápio" href="/" />
            </View>
        </View>
    )
}