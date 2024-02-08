import { SafeAreaView, View } from "react-native";
import { Slot } from "expo-router";
import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from "@/components/loading";

export default function Layout(){
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    })

    if (!fontsLoaded) {
        return <Loading/>
           
    }
    return(
        <SafeAreaView className="bg-slate-900 flex-1">
            <Slot/>
        </SafeAreaView>
    )
}