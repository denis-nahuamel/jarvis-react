/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import logo from './logo.svg';
import './App.css';
import { get15Employees, getEmployee, getEmployees } from './services/employees-service';
import { useEffect, useState } from 'react';
import { button, container, containerButton, field, head, table } from './styles/table-style';
import Field from "./field";
import CsvDownload from 'react-json-to-csv'
function App() {
  const [dataTable, setDataTable] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    let i = 0;
    let data = []
    //call the employees service
    let array_employees = [];
    while (i < 15) {
      getEmployee().then(response => {
        array_employees.push(response.results)
        if (array_employees.length === 14) {
          console.log("array", array_employees)
          setData(array_employees);
          setDataTable(array_employees)
          console.log("datatable", dataTable)
        }
      })

      i++;
    }
    // setDataTable(
    //   response.results.sort((a,b)=> { //order data by age
    //   if(a.dob.age>b.dob.age) return 1 ;
    //   if(a.dob.age<b.dob.age) return -1 ;
    //   return 0;
    // }))
    // setDataTable(data)
  }, [])

  return (
    <div css={container}>
      <div css={containerButton}>
        <CsvDownload data={data} filename="good_data.csv">download</CsvDownload>
        {/* <CsvDownload css={button} data={data} >download</CsvDownload> */}
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
          {dataTable || dataTable.lenght < 14 ? "Loading" : <Field data={dataTable} />}
        </tbody>
      </table>
    </div>
  );
}

export default App;
