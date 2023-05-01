import { React } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const doctor1 = require("../../assets/med1.jpg");
const doctor2 = require("../../assets/med2.jpg");
const doctor3 = require("../../assets/med3.jpg");

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Text style={styles.texto}>MentalMED, seu companheiro para te ajudar nas horas mais dificeis</Text>
            <View style={styles.especialista}>
                <Text style={styles.especialistaTitulo}>Especialista</Text>
                <View style={styles.doctorContainer}>
                    <View style={styles.doctor}>
                        <Image 
                            source={doctor1} 
                            style={styles.doctorImg} 
                        />
                        <Text style={styles.doctorNome}>Dr. João</Text>
                    </View>
                    <View style={styles.doctor}>
                        <Image 
                            source={doctor2} 
                            style={styles.doctorImg} 
                        />
                        <Text style={styles.doctorNome}>Dr. Carlos</Text>
                    </View>
                    <View style={styles.doctor}>
                        <Image 
                            source={doctor3} 
                            style={styles.doctorImg} 
                        />
                        <Text style={styles.doctorNome}>Dra. Maria</Text>
                    </View>
                </View>
            </View>
            <Footer 
                firstIcon="cash" 
                secondIcon="person" 
                thirdIcon="chatbubbles" 
                firstName="Assinaturas" 
                secondName="Perfil" 
                thirdName="Chat" 
            />
        </View>
    )
}