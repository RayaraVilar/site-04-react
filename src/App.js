import logo from './logo.svg';
import './App.css';
import Navegacao from './Componentes/Navegacao/Navegacao';
import './Componentes/Navegacao/Navegacao.css';
import PhotoSlider from './Componentes/Slider/Slider';
function App() {
  return (
    <div className="App">
      <Navegacao/>
      <PhotoSlider/>
    </div>
  );
}

export default App;
