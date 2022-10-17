import './App.css';

import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";
import { Route , BrowserRouter as Router } from "react-router-dom";
import {Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <nav className="navbar  navbar-expand navbar-dark bg-dark">
          <div className="nav navbar-nav">

              <Link className="nav-item nav-link active" to={"/"}>INICIO <span className="sr-only"></span></Link>

              </div>
      </nav>
      <br />
      <br />
    <div className="container">
        <Route exact path="/" component={Listar}></Route>
        <Route path="/crear" component={Crear}></Route>
        <Route path="/editar/:id" component={Editar}></Route>
    </div></Router>
  );
}

export default App;
