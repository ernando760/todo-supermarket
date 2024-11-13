import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export default function Index() {
    return (
        <View style={style.container}>
            <Text style={style.text}>TODO SUPERMARKET</Text>
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",        
    },
    text: {
        textAlign: "center",
        fontSize: 20,

    }
})