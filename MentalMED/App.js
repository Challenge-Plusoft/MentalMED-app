import Rotas from './src/routes/rotas';
import { TemaProvider } from "./src/contexts/TemaContext";
import Orientation from 'react-native-orientation-locker';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    Orientation.lockToPortrait(); // bloqueia a orientação da tela em retrato
  }, []);

  return (
    <TemaProvider>
      <Rotas />
    </TemaProvider>
  );
}


