import React from 'react'
import TableHeaderAlumnoAP from './TableHeader-AlumnoAP'
import AlumnoAPList from './Alumno-AP-List'
import ALUMNOAP from './AlumnoAP-Data'
import '../App.css';
import {browserHistory} from 'react-router-3';

class VistaTablaNueva extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vehiculos: []
    }

  }

  componentWillMount() {
    fetch('http://modulo-alumno-jdbc.herokuapp.com/alumnoalumnoprograma/listar')
    .then((response) => {
    return response.json()
    })
    .then((alumno) => {
      this.setState({ vehiculos: alumno})
      
      console.log(alumno)
   
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
  }


  render() {
      return (
        <div className="">
              <h3>Tabla Alumno-AlumnoPrograma</h3>
            
          <hr />
          <div className="SplitPane row center-xs">
            <div className="  center-xs-12">
              <table className=" total table ">
                <TableHeaderAlumnoAP/>
                <AlumnoAPList listado={this.state.vehiculos} />
              </table>
            </div>
          </div>

        </div>
      )
    }
   
}



export default VistaTablaNueva;