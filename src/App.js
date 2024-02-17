import logo from './logo.svg';
import './App.css';
import Navegacao from './Componentes/Navegacao/Navegacao';
import './Componentes/Navegacao/Navegacao.css';
import PhotoSlider from './Componentes/Slider/Slider';
import Catalogo from './Componentes/catalogo/catalogo';
import './Componentes/catalogo/catalogo.css'
import Paises from './Componentes/Paises/Paises';
import './Componentes/Paises/Paises.css';
import DirectionsMap from './Componentes/DirectionsMap/DirectionsMap';
import './Componentes/DirectionsMap/DirectionsMap.css';
import Cta from './Componentes/Cta/Cta';
import './Componentes/Cta/Cta.css';
import Footer from './Componentes/Footer/Footer';
import './Componentes/Footer/Footer.css';




function App() {
  return (
    <div className="App">
      <Navegacao/>
      <PhotoSlider/>
      <Catalogo/>
      <Paises/>
      <DirectionsMap/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
