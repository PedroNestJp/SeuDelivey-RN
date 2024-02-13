import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { useCartStore } from "@/stores/cart-store";
import { Text, View } from "react-native";
import { FormatCurrency } from "@/utils/functions/function-currency";

export default function Cart() {
    const cartStore = useCartStore()
    const total = FormatCurrency(cartStore.products.reduce((total, product) =>
        total + product.price * product.quantity, 0))

    return (
        <View className="flex-1 ">
            <Header title="Carrinho" />

            {cartStore.products.length > 0 ?
                <View className="flex-1 p-4">
                    {cartStore.products.map((product) => (
                        <Product data={product} key={product.id} />
                    ))}
                </View>
                :
                <Text>
                    Adicione itens ao seu pedido
                </Text>
            }


            <View className="flex-row items-center gap-2 mt-5 mb-5 ">
                <Text className="text-white text-xl font-subTitle "> Total:</Text>
                <Text className="text-white text-xl">{total}</Text>
            </View>
        </View>
    )
}