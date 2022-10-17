import React from "react";
import {Link} from "react-router-dom";
import Api from "../servicios/api"
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            empleados:[]
        }

}
borrarRegistros = (id)=>{
    console.log(id);

    fetch(Api+"?borrar="+id)
    .then(respuesta =>respuesta.json())
    .then((datosRespuesta)=>{
      console.log(datosRespuesta);
      this.cargarDatos();
  })
    .catch(console.log)
  }

cargarDatos(){
  fetch(Api)
  .then(respuesta =>respuesta.json())
  .then((datosRespuesta)=>{
    console.log(datosRespuesta);
    this.setState({datosCargados:true, empleados:datosRespuesta})
})
  .catch(console.log)
}


componentDidMount() {
    this.cargarDatos();

}


render() {
    const{datosCargados, empleados} = this.state
    
    if(!datosCargados){return(<div>Cargando...</div>)}
    else{
    return ( 
    
        
            <div className="">
            <Link type="button" className="btn btn-success " to={"/crear"}>AGREGAR NUEVO REGISTRO</Link>
            <br />
            <br />
            <div className="">
                <h1 align="center">LISTA DE REGISTROS</h1>
                <br />
                <br />
            <table className="table table table-bordered table-striped">
        <thead className="table-dark " align="center">
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>DESCRIPCION</th>
                <th>GRADO Y SECCION</th>
                <th>NIVEL</th>
                <th>FECHA DE PUBLICACION</th>
                <th>ACCIONES</th>
            </tr>
        </thead>
        <tbody align="center">
            {empleados.map(
                (empleado) =>(
            <tr key={empleado.id}>
                <td>{empleado.id}</td>
                <td>{empleado.nombre}</td>
                <td>{empleado.descripcion}</td>
                <td>{empleado.grado_seccion}</td>
                <td>{empleado.nivel}</td>
                <td>{empleado.fecha}</td>
                <td>
                    <div className="btn-group" role="group" aria-label="">
                        <Link type="button" className="btn btn-primary " to={"/editar/"+empleado.id}>EDITAR</Link>
                        <button type="button" className="btn btn-danger" onClick={()=>this.borrarRegistros(empleado.id)}>BORRAR</button>
                    </div>
                </td>
            </tr>
                )
            )}
   
        </tbody>
    </table>
    <br />    
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
    
    
    
    )};
}
}
export  default Listar;