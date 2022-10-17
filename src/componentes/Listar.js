import React from "react";
import {Link} from "react-router-dom";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datosCargados: false,
            empleados:[]
        }

}


cargarDatos(){
  fetch("http://localhost/empleados/")
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
        <div className="card">
            <div className="card-header">
            <Link className="btn btn-success" to={"/crear"}>Agregar nuevo reporte</Link> 
            </div>
            <div className="card-body">
    <h4>Lista de Reportes </h4>        
    <table className="table">
        <thead align="center">
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
                    <div class="btn-group" role="group" aria-label="">
                        <Link type="button" class="btn btn-warning" to={"/editar"}>EDITAR</Link>
                        <button type="button" class="btn btn-danger">BORRAR</button>
                    </div>
                </td>
            </tr>
                )
            )}






            
        </tbody>
    </table>
            </div>
            <div class="card-footer text-muted">

            </div>
        </div>        
       )};
}
}
export  default Listar;