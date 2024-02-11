import { View, FlatList, SectionList, Text } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

import { CATEGORIES, MENU } from "@/utils/data/products";
import { useState, useRef } from "react";
import { Product } from "@/components/product";

export default function Home() {

    const [category, setCategory] = useState(CATEGORIES[0])

    const sectionListRef = useRef<SectionList>(null)

    function handleCategorySelected(selectCategory: string) {
        setCategory(selectCategory)

        const sectionIndex = CATEGORIES.findIndex((category) => category === selectCategory)
        console.log(sectionIndex)
        if(sectionListRef.current){
            sectionListRef.current.scrollToLocation({
                animated:true,
                sectionIndex,
                itemIndex:0,

            })
            
        }
    }

    return (
        <View className="flex-1 pt-8">

            <Header title={'Faça seu pedido'} cartQuantityItems={2} />

            <FlatList
            
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) =>
                    <CategoryButton
                        title={item}
                        isSelected={item === category}
                        onPress={() => handleCategorySelected(item)} />
                }

                horizontal
                className="max-h-10 mt-6"
                contentContainerStyle={{ gap: 12, paddingHorizontal: 5 }}
                showsHorizontalScrollIndicator={false}

            />
            <SectionList
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Product data={item}/>
                )
                }
                renderSectionHeader={({ section: { title } }) => (
                    <Text className="text-white text-xl font-heading mt-3 mb-3 " > {title} </Text>
                )}
                className="flex-1 p-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:70}}
            />


        </View>
    )
}