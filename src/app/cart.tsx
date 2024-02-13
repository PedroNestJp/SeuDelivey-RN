import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { useCartStore } from "@/stores/cart-store";
import { View } from "react-native";

export default function Cart() {
    const cartStore = useCartStore()
    return(
        <View className="flex-1 ">
            <Header title="Carrinho"/>
            <View className="flex-1 p-4">
                {cartStore.products.map((product) => (
                    <Product data={product} key={product.id}/>
                ) )}
            </View>
        </View>
    )
}