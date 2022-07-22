/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import logo from './logo.svg';
import './App.css';
import { getEmployees } from './services/employees-service';
import { useEffect, useState } from 'react';
import { field, head, table } from './styles/table-style';
import Field from "./field";

function App() {
  const [dataTable, setDataTable] = useState();
  useEffect(()=> {
    getEmployees().then(response => setDataTable(
      response.results.sort((a,b)=> {
      if(a.dob.age>b.dob.age) return 1 ;
      if(a.dob.age<b.dob.age) return -1 ;
      return 0;
    })))
  },[])

  return (
    <div className="App">
      <table >
        <thead >
          <tr >
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Genero</th>
            <th>Email</th>
            <th>Nacionalidad</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {dataTable?<Field data={dataTable} />:"Loading"}
        </tbody>
      </table>
    </div>
  );
}

export default App;
