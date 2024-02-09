import { View, FlatList } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

import { CATEGORIES } from "@/utils/data/products";

export default function Home() {
    return (
        <View className="flex-1 pt-8">

            <Header title={'Faça seu pedido'} cartQuantityItems={2} />

            <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item}
            renderItem={({item}) => <CategoryButton title={item}/>}
            horizontal
            className="max-h-10 mt-5"
            contentContainerStyle={{gap:12, paddingHorizontal:5}}
            showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}