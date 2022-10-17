import './App.css';

import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import {Link} from "react-router-dom";


function App() {
  return (
    <Router>
    <nav class="navbar navbar-expand navbar-light bg-light">
          <div class="nav navbar-nav">
              <Link class="nav-item nav-link active" to={"/"}>SISTEMA <span class="sr-only"></span></Link>
              <Link class="nav-item nav-link" to={"/crear"}>CREAR</Link>
              <Link class="nav-item nav-link" to={"/editar"}>EDITAR</Link></div>
      </nav>
      <br />
      <div className="container">
        
          <Routes>
          <Route path='/' element={<Listar></Listar>}> </Route>
          <Route path='/crear' element={<Crear></Crear>}> </Route>
          <Route path='/editar' element={<Editar></Editar>}> </Route>
          </Routes>
      </div>
        </Router>

      

  );
}

export default App;
