import React from "react";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  Publish as Publish,
  Visibility as Visibility,

} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function AdminsList() {

  return (
    <>
      <PageTitle title="Admins List " />

            <h1> Bonjour tt le monde </h1>
         
      <Link to="/app/add" className="mini ui blue button" style={{ align: "Right" }}>  Add Admin </Link>
      <div className="ui main container">
        <div className="data">
          <table className="ui celled table">
            <thead>
              <tr>
                <th style={{ width: '50px', textAlign: "center" }}> #</th>
                <th> Full Name </th>
                <th> E-mail</th>
                <th style={{ width: "148px" }}> Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}> 1</td>
                <td> Anis chennaoui </td>
                <td> anischennaoui10@gmail.com</td>
                <td>
                  
                    <button className="mini ui blue button">  Edit</button>
                  
                  <button className="mini ui red button">  Delete </button>
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
    </>
  );
}
