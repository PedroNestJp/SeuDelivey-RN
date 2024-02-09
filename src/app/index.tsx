import { View } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

export default function Home() {
    return(
        <View className="flex-1 pt-8">

            <Header title={'Faça seu pedido'} cartQuantityItems={2} />

            <View className="flex-row gap-4">
                <CategoryButton title="Lanches do dia" />
                <CategoryButton title="Lanches do dia" isSelected/>
                <CategoryButton title="Lanches do dia" />
            </View>

        </View>
    )
}