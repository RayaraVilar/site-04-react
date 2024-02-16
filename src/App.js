import logo from './logo.svg';
import './App.css';
import Navegacao from './Componentes/Navegacao/Navegacao';
import './Componentes/Navegacao/Navegacao.css';
import PhotoSlider from './Componentes/Slider/Slider';
import Catalogo from './Componentes/catalogo/catalogo';
import './Componentes/catalogo/catalogo.css'


function App() {
  return (
    <div className="App">
      <Navegacao/>
      <PhotoSlider/>
      <Catalogo/>
    </div>
  );
}

export default App;
