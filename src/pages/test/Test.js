import React from "react";
import axios from 'axios';
import  {useState, useEffect} from 'react';



// components
import PageTitle from "../../components/PageTitle/PageTitle";


export default function Test() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost/apitest/public/api/cour')
      .then(response => {
        setData(response.data);
      });
    } ,[])

    return (
      <>
        <PageTitle title="test" />
        <div>
          <table>
            <thead>
              <tr>
                <th> #</th>
                <th> Name </th>
                <th> Email </th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(row => {
                  return (
                    <tr key={row.id}>
                      <th> 1 {row.id}</th>
                      <td> {row.name_cour}</td>
                      <td> {row.id_prof}</td>
                    </tr>
                  );
                })
              }

            </tbody>
          </table>
        </div>

      </>
  
    );
}