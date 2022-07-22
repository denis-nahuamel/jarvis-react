/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import logo from './logo.svg';
import './App.css';
import { getEmployees } from './services/employees-service';
import { useEffect, useState } from 'react';
import { button, container, containerButton, field, head, table } from './styles/table-style';
import Field from "./field";
import CsvDownload from 'react-json-to-csv'
function App() {
  const [dataTable, setDataTable] = useState([]);
  const [data, setData] = useState();
  useEffect(()=> {
    let i=0;
    let data = []
    //call the employees service
    while (i<16){
      getEmployees().then(response => {
        console.log("response status", response.status)
        if(response.status=== 200){
          data.push(response.json().results)
          i++;
        }
        // data.push(response.json().results)
        if(data.length ===15) {
          setDataTable(data)
        }
      })
      // i++;
    }
      // setDataTable(
        //   response.results.sort((a,b)=> { //order data by age
        //   if(a.dob.age>b.dob.age) return 1 ;
        //   if(a.dob.age<b.dob.age) return -1 ;
        //   return 0;
        // }))
      // setDataTable(data)
      setData(data);
  },[])

  return (
    <div css={container}>
      <div css={containerButton}>
       <CsvDownload  data={data}   filename="good_data.csv">download</CsvDownload>
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
          {dataTable|| dataTable.lenght!==15?"Loading":<Field data={dataTable} />}
        </tbody>
      </table>
    </div>
  );
}

export default App;
