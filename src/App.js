
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar';
import Inicio from './Components/Paginas/Inicio';
import Menu from './Components/Paginas/Menu';
import Formulario from './Components/Paginas/Formulario';
import Adivinanza from './Components/Paginas/Adivinanza';
import { useState } from 'react';


function App() {
  const [ingresoU, setIngresoU] = useState("");
  const [ingresoC, setIngresoC] = useState("");
  const [bd, setBd] = useState("");
  const [nav, setNav] = useState("");
  const [numU, setNumU] = useState("");

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Inicio
          Link={Link}
          />}/>
          <Route path='/Formulario'  element={<Formulario
          ingresoU={ingresoU}
          setIngresoU={setIngresoU}
          ingresoC={ingresoC}
          setIngresoC={setIngresoC}
          bd={bd}
          setBd={setBd}
          nav={nav}
          setNav={setNav}
          Link={Link}
                    />}/>
          <Route path='/Menu'  element={<Menu
          Link={Link}
          />} />
          <Route path='/Adivinanza'  element={<Adivinanza
          numU={numU}
          setNumU={setNumU}
          Link={Link}
          />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
