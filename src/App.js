import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [busqueda, setBusqueda] = useState({
        ciudad:''
  });

  const [consultar, setConsultar] = useState(false);

  const { ciudad } = busqueda;

  /*useEffect( () => {
    const consultarAPI = () => {
      let appId = '176bb9b0fd872fd081301d6e19722738';

      let url = 'http://api.openweathermap.org/data/2.5/weather';
    
      url += `?q=London,uk&APPID=${appId}`;

      fetch( url ).then(
        response => {
          return response.json();
        }
      ).then(
        data => {
          console.log(data);
        }
      ).catch(
        () => {
          console.log("error");
        }
      )
 
    }

    consultarAPI();

  },[consultar]);*/

  useEffect( () => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = '176bb9b0fd872fd081301d6e19722738';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=${appId}`;
      
        const response = await fetch( url );
        const data = await response.json();
        console.log(data); 
      }  
    }

    consultarAPI();

  },[consultar]);

  return (
    <>
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={busqueda} 
                          setBusqueda={setBusqueda}
                          setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

