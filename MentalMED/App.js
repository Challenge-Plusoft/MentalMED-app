import Rotas from './src/routes/rotas';
import { TemaProvider } from "./src/contexts/TemaContext";

export default function App() {
  return (
    <TemaProvider>
      <Rotas />
    </TemaProvider>
  );
}


