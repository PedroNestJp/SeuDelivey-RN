import React from "react";
import { SafeAreaView, View } from "react-native";
import { Slot } from "expo-router";
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
} from '@expo-google-fonts/inter'
import  {Loading}  from "@/components/loading";

export default function Layout(){
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold
    })

    if (fontsLoaded) {
        return (
            <View>
                <Loading />
            </View>
        );
    }
    return(
        <SafeAreaView className="bg-slate-900 flex-1 pt-5">
            <Slot/>
        </SafeAreaView>
    )
}