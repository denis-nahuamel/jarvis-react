/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import logo from './logo.svg';
import './App.css';
import {  getEmployee } from './services/employees-service';
import { useEffect, useState } from 'react';
import { button, container, containerButton, field, head, table } from './styles/table-style';
import Field from "./field";
import CsvDownload from 'react-json-to-csv'
function App() {
  const [dataTable, setDataTable] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
      getEmployee().then(response => {
        setData(response.results);
        setDataTable(response.results)
      })
  }, [])

  return (
    <div css={container}>
      <div css={containerButton}>
        <CsvDownload data={data} filename="good_data.csv">download</CsvDownload>
      </div>
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
          {dataTable ?<Field data={dataTable} />: "Loading" }
        </tbody>
      </table>
    </div>
  );
}

export default App;
