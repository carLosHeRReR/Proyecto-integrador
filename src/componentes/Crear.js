import React from 'react';
import{Link} from "react-router-dom";

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre:"",
            descripcion:"",
            grado_seccion:"",
            nivel:"",
            fecha:"",
         }
    }
    cambioValor = (e) => {
        const state = this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
    }
    enviarDatos = (e) => {
        e.preventDefault();
        console.log("Formulario enviado...");
        const{nombre, descripcion,grado_seccion,nivel,fecha} = this.state;
        console.log(nombre, descripcion,grado_seccion,nivel,fecha);

        var datosEnviar={nombre:nombre, descripcion:descripcion, grado_seccion:grado_seccion,nivel:nivel,fecha:fecha}

        fetch("http://localhost/empleados/?insertar=1",{
            method:"POST",
            body:JSON.stringify(datosEnviar)
        })
        .then(respuesta =>respuesta.json())
        .then((datosRespuesta)=>{
          console.log(datosRespuesta);
          
      })
        .catch(console.log)

    }    
render() {

    const{nombre, descripcion,grado_seccion,nivel,fecha} = this.state;
    return (
        <div className="card">
            <div className="card-header">
                CREAR REGISTRO DE REPORTE
            </div>
            <div className="card-body">
                <form onSubmit={this.enviarDatos}>
                    <div className="form-group">
                        <label htmlFor="">Nombre:</label>
                         <input type="text" name="nombre" onChange={this.cambioValor} value={nombre} id="nombre" className="form-control" placeholder="" aria-describedby='helpdId'/>
                         <small id="helpdId" className="text-muted">Escribe el nombre</small> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Descripcion:</label>
                         <input type="text" name="descripcion" onChange={this.cambioValor} value={descripcion} id="descripcion" className="form-control" placeholder="" aria-describedby='helpdId'/>
                         <small id="helpdId" className="text-muted">Escribe la descripcion</small> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Grado_Seccion:</label>
                         <input type="text" name="grado_seccion" onChange={this.cambioValor} value={grado_seccion} id="grado_seccion" className="form-control" placeholder="" aria-describedby='helpdId'/>
                         <small id="helpdId" className="text-muted">Escribe el grado y seccion</small> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Nivel:</label>
                         <input type="text" name="nivel" onChange={this.cambioValor} value={nivel} id="nivel" className="form-control" placeholder="" aria-describedby='helpdId'/>
                         <small id="helpdId" className="text-muted">Escribe el nivel</small> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Fecha:</label>
                         <input type="text" name="fecha" onChange={this.cambioValor} value={fecha} id="fecha" className="form-control" placeholder="" aria-describedby='helpdId'/>
                         <small id="helpdId" className="text-muted">Escribe la fecha de publicacion</small> 
                    </div>
                    <div className="btn-group" role="group" aria-label="">

                        <button type="submit" className="btn btn-success">Agregar nuevo</button>
                        <Link to={"/"} type="button" className="btn btn-primary">Cancelar</Link>
                    </div>    
                </form>
                
            </div>
            <div className="card-footer text-muted">
                  </div>
        </div>);
}
}

export default Crear;
