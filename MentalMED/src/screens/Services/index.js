import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { styles } from "./styles";
import { TemaContext } from '../../contexts/TemaContext';

export default function Services({navigation}){
  const { temaEscolhido } = useContext(TemaContext);
  const style = styles(temaEscolhido);

  return (
    <View style={style.container}>
      <Header navigation={navigation} />
      <View style={style.content}>
        <Text style={style.title}>Serviços de Assinaturas</Text>
        <View style={style.listContainer}>
          <View style={style.listItem}>
            <Text style={style.listItemTitle}>Depressão Maior</Text>
          </View>
          <View style={style.listItem}>
            <Text style={style.listItemTitle}>Distimia</Text>
          </View>
          <View style={style.listItem}>
            <Text style={style.listItemTitle}>Transtorno afetivo sazonal</Text>
          </View>
          <View style={style.listItem}>
            <Text style={style.listItemTitle}>Depressão pós-parto</Text>
          </View>
          <View style={style.listItem}>
            <Text style={style.listItemTitle}>Depressão psicótica</Text>
          </View>
          <View style={style.listItem}>
            <Text style={style.listItemTitle}>Transtorno bipolar</Text>
          </View>
          <View style={style.listItem}>
            <Text style={style.listItemTitle}>Depressão situacional</Text>
          </View>
        </View>
      </View>
      <Footer 
        firstIcon="md-home"
        firstName="Home"
        navigateToFirst={() => navigation.navigate('Home')}
        secondIcon="person"
        secondName="Perfil"
        thirdIcon="chatbubbles"
        thirdName="Chat"
      />
    </View>
  );
};