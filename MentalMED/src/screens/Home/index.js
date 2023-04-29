import { React } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import Header from "../../components/Header";
import Footer from"../../components/Footer";

export default function Home() {
    return(
        <View>
            <Header />
            <Footer firstIconName="cash" secondIconName="person" thirdIconName="chatbubbles" />
        </View>
    )
}