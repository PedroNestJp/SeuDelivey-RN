import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation, Redirect } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { FormatCurrency } from "@/utils/functions/function-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons"
import { LinkButton } from "@/components/linkButton";
import { useCartStore } from "@/stores/cart-store";
import ModalCustom from "@/components/modal";

export default function Product() {
    const cartStore = useCartStore()
    const navigation = useNavigation()
    const { id } = useLocalSearchParams()
    const [modalVisible, setModalVisible] = useState(false);

    function handleAddToCart() {
        if (product) {
            cartStore.add(product);
            setModalVisible(true);
            
        }
    }

    const product = PRODUCTS.find((item) => item.id === id)

    if (!product) {
        return <Redirect href={'/'} />
    }


    return (
        <View className="flex-1">
            <Image
                source={product.cover}
                className="w-full h-52"
                resizeMode="cover"
            />

            <View className="p-4 mt-8 flex-1 gap-1">
                <Text className="text-white text-xl font-heading">
                    {product.title}
                </Text>
                <Text
                    className="font-heading text-2xl text-lime-400 my-4">
                    {FormatCurrency(product.price)}
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
                <Button onPress={handleAddToCart}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20} />
                    </Button.Icon>
                    <Button.Text> Adicionar ao pedido </Button.Text>
                </Button>
                <LinkButton className="mt-2" title="Voltar ao Cardápio" href="/" />
            </View>

            {
                modalVisible && (
                    <ModalCustom
                        modalMessage={`1 ${product.title} adicionado ao pedido ✅`}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(false);
                            navigation.goBack();// Mova isso aqui se quiser navegar de volta após fechar o modal
                        }}
                        
                    />
                    
                )
            }
        </View>
    )
}
