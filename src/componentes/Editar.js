import React from 'react';
import {Link} from "react-router-dom";
import Api from "../servicios/api"
class Editar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            datosCargados:false,
            empleado:[]
        }
}

cambioValor = (e) => {
    const state = this.state.empleado;
    state[e.target.name] = e.target.value;
    this.setState({empleado:state});
}

enviarDatos = (e) => {
    e.preventDefault();
    console.log("Formulario Enviado...")
    const{id,nombre,descripcion,grado_seccion,nivel,fecha}= this.state.empleado;
    console.log(id);
    console.log(nombre);
    console.log(descripcion);
    console.log(grado_seccion);
    console.log(nivel);
    console.log(fecha);

    var datosEnviar= {id:id,nombre:nombre, descripcion:descripcion, grado_seccion:grado_seccion, nivel:nivel, fecha:fecha};


            fetch(Api+"?actualizar=1",{
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


componentDidMount() {
    console.log(this.props.match.params.id);

    fetch(Api+"?consultar="+this.props.match.params.id)
    .then(respuesta=>respuesta.json())
    .then((datosRespuesta)=>{
      console.log(datosRespuesta);
      this.setState({
        datosCargados:true,
        empleado:datosRespuesta[0]
    })
  })
    .catch(console.log)
}

render() {
    const{datosCargados, empleado} = this.state
    if(!datosCargados){return(<div>Cargando...</div>)}
    else{
    return ( <div className="card">
    <div className="card-header">EDITAR REGISTRO</div>
    <div className="card-body">

        <form onSubmit={this.enviarDatos}>

                <div className="form-group">
                  <label htmlFor="">ID:</label>
                  <input type="text" readOnly name="nombre" onChange={this.cambioValor} value={empleado.id} id="id" className="form-control" placeholder="Escriba su Nombre" aria-describedby="helpId" /><br />
                </div>
                <div className="form-group">
                  <label htmlFor="">NOMBRE:</label>
                  <input type="text" name="nombre" onChange={this.cambioValor} value={empleado.nombre} id="nombre" className="form-control" placeholder="Escriba su Nombre" aria-describedby="helpId" /><br />
                </div>
                <div className="form-group">
                  <label htmlFor="">DESCRIPCION:</label>
                  <input type="text" name="descripcion" onChange={this.cambioValor} value={empleado.descripcion} id="descripcion" className="form-control" placeholder="Ingrese una Descripcion" aria-describedby="helpId" /><br />
                </div>
                <div className="form-group">
                  <label htmlFor="">GRADO Y SECCION:</label>
                  <input type="text" name="grado_seccion" onChange={this.cambioValor} value={empleado.grado_seccion} id="grado_seccion" className="form-control" placeholder="Ingrese su grado y seccion" aria-describedby="helpId" /><br />
                </div>
                <div className="form-group">
                  <label htmlFor="">NIVEL:</label>
                  <input type="text" name="nivel" onChange={this.cambioValor} value={empleado.nivel} id="nivel" className="form-control" placeholder="Ingrese el Nivel" aria-describedby="helpId" /><br />
                </div>
                <div className="form-group">
                  <label htmlFor="">FECHA:</label>
                  <input type="date" name="fecha" onChange={this.cambioValor} value={empleado.fecha} id="fecha" className="form-control" placeholder="Ingrese Una Fecha" aria-describedby="helpId" /><br />
                </div>
                <div className="btn-group" role="group" aria-label="">
                    <button type="submit" className="btn btn-success">ACTUALIZAR REGISTRO</button>
                    <Link to={"/"} className="btn btn-danger">CANCELAR</Link>
                </div>
            </form>
    </div>
    <div className="card-footer text-muted"></div>
    </div>);
        }
    }
}

export default Editar;
