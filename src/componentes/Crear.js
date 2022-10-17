import React from 'react';
import { Link , useNavigate} from "react-router-dom";
import Api from "../servicios/api"
class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           nombre:"",
           descripcion:"",
           grado_seccion:"",
           nivel:"",
           fecha:"",
           errores:[]
        }
}
    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({state,errores:[]});
    }

    verificarError(elemento){
      return this.state.errores.indexOf(elemento) !==-1;
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log("Formulario Enviado...")

        const{nombre, descripcion,grado_seccion,nivel,fecha} = this.state;
        console.log(nombre);
        console.log(descripcion);
        console.log(grado_seccion);
        console.log(nivel);
        console.log(fecha);
  

      var errores=[];
      if(!nombre)errores.push("error_nombre");
      if(!descripcion)errores.push("error_descripcion");
      if(!grado_seccion)errores.push("error_grado_seccion");
      if(!nivel)errores.push("error_nivel");
      if(!fecha)errores.push("error_fecha");

      this.setState({errores:errores});
      if(errores.length>0)return false;

        var datosEnviar= {nombre:nombre, descripcion:descripcion, grado_seccion:grado_seccion, nivel:nivel, fecha:fecha};


            fetch(Api+"?insertar=1",{
                method: "POST",
                body: JSON.stringify(datosEnviar)
              })
            .then(respuesta =>respuesta.json())
            .then((datosRespuesta)=>{
              console.log(datosRespuesta);
              this.props.history.push("/");

          })
            .catch(console.log)
          }
    

render() {

    const{nombre, descripcion, grado_seccion, nivel, fecha} = this.state;

    return (
        <div className="card">
            <div className="card-header">CREAR REGISTRO</div>
            <div className="card-body">

            <form onSubmit={this.enviarDatos}>
                <div className="form-group">
                  <label htmlFor="">NOMBRE:</label>
                  <input type="text" name="nombre" onChange={this.cambioValor} value={nombre} id="nombre" 
                  className={ ((this.verificarError("error_nombre"))?"is-invalid":"")+ " form-control"} placeholder="Escriba su Nombre" aria-describedby="helpId" />
                  <small id="helpId" className="invalid-feedback">Escribe el Nombre Correctamente</small>
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="">DESCRIPCION:</label>
                  <input type="text" name="descripcion" onChange={this.cambioValor} value={descripcion} id="descripcion" 
                  className={ ((this.verificarError("error_descripcion"))?"is-invalid":"")+ " form-control"} placeholder="Ingrese una Descripcion" aria-describedby="helpId" />
                  <small id="helpId" className="invalid-feedback">Escribe la Descripcion Correctamente</small>
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="">GRADO Y SECCION:</label>
                  <input type="text" name="grado_seccion" onChange={this.cambioValor} value={grado_seccion} id="grado_seccion" 
                  className={ ((this.verificarError("error_grado_seccion"))?"is-invalid":"")+ " form-control"} placeholder="Ingrese su grado y seccion" aria-describedby="helpId" />
                  <small id="helpId" className="invalid-feedback">Escribe el Grado y Seccion Correctamente</small>
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="">NIVEL:</label>
                  <input type="text" name="nivel" onChange={this.cambioValor} value={nivel} id="nivel" 
                  className={ ((this.verificarError("error_nivel"))?"is-invalid":"")+ " form-control"} placeholder="Ingrese el Nivel" aria-describedby="helpId" />
                  <small id="helpId" className="invalid-feedback">Escribe el Nivel Correctamente</small>
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="">FECHA:</label>
                  <input type="date" name="fecha" onChange={this.cambioValor} value={fecha} id="fecha" 
                  className={ ((this.verificarError("error_fecha"))?"is-invalid":"")+ " form-control"} placeholder="Ingrese Una Fecha" aria-describedby="helpId" />
                  <small id="helpId" className="invalid-feedback">Escribe la Fecha Correctamente</small>
                </div>
                <br />
                <div className="btn-group" role="group" aria-label="">
                    <button type="submit" className="btn btn-success">AGREGAR REGISTRO</button>
                    <Link to={"/"} className="btn btn-danger">CANCELAR</Link>
                </div>
            </form>

            </div>
            <div className="card-footer text-muted"> </div>
        </div>);
}
}

export default Crear;
