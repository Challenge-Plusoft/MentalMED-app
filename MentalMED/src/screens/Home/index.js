import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { TemaContext } from '../../contexts/TemaContext';

import Header from "../../components/Header";
import Footer from"../../components/Footer";

const doctor1 = require("../../assets/med1.jpg");
const doctor2 = require("../../assets/med2.jpg");
const doctor3 = require("../../assets/med3.jpg");

export default function Home({navigation}) {

  const { temaEscolhido } = useContext(TemaContext);
  const style = styles(temaEscolhido);
  
    return(
        <View style={style.container}>
            <Header navigation={navigation} />
            <Text style={style.texto}>MentalMED, seu companheiro para te ajudar nas horas mais dificeis</Text>
             <View style={style.especialista}>
        <Text style={style.especialistaTitulo}>Especialista</Text>
        <View style={style.doctorContainer}>
          <View style={style.doctor}>
            <Image source={doctor1} style={style.doctorImg} />
            <Text style={style.doctorNome}>Dr. João</Text>
          </View>
          <View style={style.doctor}>
            <Image source={doctor2} style={style.doctorImg} />
            <Text style={style.doctorNome}>Dr. Carlos</Text>
          </View>
          <View style={style.doctor}>
            <Image source={doctor3} style={style.doctorImg} />
            <Text style={style.doctorNome}>Dra. Maria</Text>
          </View>
        </View>
      </View>
            <Footer firstIcon="cash" firstName="Assinaturas" navigateToFirst={() => navigation.navigate('Services')}  secondIcon="person" thirdIcon="chatbubbles" secondName="Perfil" thirdName="Chat" />
        </View>
    )
}