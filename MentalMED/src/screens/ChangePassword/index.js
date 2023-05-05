import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TemaContext } from '../../contexts/TemaContext';
import { styles } from './styles'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ChangePassword({ navigation }){
  const [senha, setSenha] = useState('');

  const { temaEscolhido } = useContext(TemaContext);
  const style = styles(temaEscolhido);
  return(
    <View style={style.container}>
      <Header navigation={navigation} />
      <View style={style.content}>
        <Text style={style.title}>Mudar senha</Text>
        <TextInput 
          style={style.input} 
          placeholder="Digite a nova senha" 
          placeholderTextColor={temaEscolhido.texto}
          secureTextEntry={true}
        />
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Mudar senha</Text>
        </TouchableOpacity>
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
  )
}