import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { escuro, claro } from '../stylesGlobal';

export const TemaContext = createContext({})

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('escuro');

  const temas = {
    escuro: escuro,
    claro: claro,
  };

  useEffect(() => {
    async function loadTema() {
      const temaStorage = await AsyncStorage.getItem('@tema');
      if (temaStorage) {
        setTema(temaStorage);
      }
    }
    loadTema();
  }, []);

  async function setTemaAtual(novoTema) {
    await AsyncStorage.setItem('@tema', novoTema);
    setTema(novoTema);
  }

  return (
    <TemaContext.Provider
      value={{
        tema,
        setTemaAtual,
        temaEscolhido: temas[tema] || temas.escuro, 
      }}
    >
      {children}
    </TemaContext.Provider>
  );
}