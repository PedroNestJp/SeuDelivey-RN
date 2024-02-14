import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { useCartStore } from "@/stores/cart-store";
import { Text, View, ScrollView } from "react-native";
import { FormatCurrency } from "@/utils/functions/function-currency";
import { Input } from "@/components/input";
import colors from "tailwindcss/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";

export default function Cart() {
    const cartStore = useCartStore()
    const total = FormatCurrency(cartStore.products.reduce((total, product) =>
        total + product.price * product.quantity, 0))

    return (
        <View className="flex-1 ">
            <Header title="Carrinho" />

            <KeyboardAwareScrollView>
                <ScrollView>
                    {cartStore.products.length > 0 ?
                        <View className="flex-1 p-4 border-slate-400 border-b">
                            {cartStore.products.map((product) => (
                                <Product data={product} key={product.id} />
                            ))}
                        </View>
                        :
                        <Text>Adicione itens ao seu pedido</Text>
                    }
                    <View className="p-4">
                        <View className="flex-row items-center mt-4 mb-4 ">
                            <Text className="text-white text-xl font-subTitle "> Total:</Text>
                            <Text className=" text-2xl text-lime-400 font-heading">{total}</Text>
                        </View>
                        <Input placeholder="informações de entrega. Informe : bairro, rua e número   " />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
            <Button className="p-4">
                <Button.Text> Enviar Pedido </Button.Text>
                <Button.Icon>
                    <Feather name="arrow-right-circle" />
                </Button.Icon>
            </Button>
        </View>
    )
}