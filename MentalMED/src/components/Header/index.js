import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Logo from '../../assets/Logo';
import { styles } from "./styles";
import { TemaContext } from '../../contexts/TemaContext';

export default function Header({ navigation }) {
    const { temaEscolhido } = useContext(TemaContext);
    const style = styles(temaEscolhido);
    return(
        <View style={style.container}>
        <View style={style.left}>
          <Image 
            source={Logo} 
            style={[style.logo, { width: 80, height: 80 }]} 
          />
        </View>
        <View style={style.middle}>
          <Text style={[style.name, { fontSize: 32 }]}>Vinícius</Text>
        </View>
        <View style={style.right}>
          <TouchableOpacity onPress={() => navigation.navigate('Config')}>
            <AntDesign 
              name="setting" 
              size={45} 
              color={style.iconColor.color}
             />
          </TouchableOpacity>
        </View>
      </View>
    )
}