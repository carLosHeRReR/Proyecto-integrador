import React from 'react';

class Editar extends React.Component{
    constructor(props){
        super(props);
        this.state = { }
}

render() {
    return ( <div className="card">
    <div className="card-header">EDITAR REGISTRO</div>
    <div className="card-body">
        <h4 class="card-title">TITULO</h4>
        <p className="card-text">TEXT</p>
    </div>
    <div className="card-footer text-muted">FOOTER</div>
    </div>);
    }
}

export default Editar;
