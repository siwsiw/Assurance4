import React from "react";
import { Component } from 'react'

// styles
import "./style.css";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";


export default class PersonnelList extends Component {
  onDelete = () => {
    console.log("customer on delete");
  };
render() {
  
  return (
    <>
    
    <PageTitle title="Personnel List" />
    <Link to="/app/add" className="mini ui blue button"style={{ marginLeft: "90%" }} >  Add Personnel </Link>

    
      <div className="ui main container">
        <div className="data">
          <table className="ui celled table">
          <thead>
            
                   <tr>
                       <th style={{width:'50px',textAlign:"center"}}> #</th>
                       <th> Full Name </th>
                       <th> E-mail</th>
                       <th style={{width:"148px"}}> Action</th>
                   </tr>
               </thead>
            <tbody>
            <tr>
                       <td style={{textAlign:"center"}}> 1</td>
                       <td> Chloé Chloé </td>
                       <td> chloé_chloé@yahoo.fr</td>
                        <td>
                            <button className="mini ui blue button">  Edit</button>
                            <button className="mini ui red button" onClick={this.onDelete}>  Delete </button>

                        </td>
                   </tr>
                   <tr>
                       <td style={{textAlign:"center"}}> 2</td>
                       <td> Ammar ben sahleh </td>
                       <td> amarAmar@hotmail.fr</td>
                        <td>
                            <button className="mini ui blue button">  Edit</button>
                            <button className="mini ui red button" onClick={this.onDelete}>  Delete </button>

                        </td>
                   </tr>
                   <tr>
                       <td style={{textAlign:"center"}}> 3</td>
                       <td>Malek ben saad  </td>
                       <td> malek.saad@gmail.com</td>
                        <td>
                            <button className="mini ui blue button">  Edit</button>
                            <button className="mini ui red button" onClick={this.onDelete}>  Delete </button>

                        </td>
                   </tr>
                   <tr>
                       <td style={{textAlign:"center"}}> 4</td>
                       <td> Meryam Mohamed </td>
                       <td> myriam.mohamed@gmail.com</td>
                        <td>
                            <button className="mini ui blue button">  Edit</button>
                            <button className="mini ui red button" onClick={this.onDelete}>  Delete </button>

                        </td>
                   </tr>
                   <tr>
                       <td style={{textAlign:"center"}}> 5</td>
                       <td> Amira Amira</td>
                       <td> amira.amira@gmail.com</td>
                        <td>
                            <button className="mini ui blue button">  Edit</button>
                            <button className="mini ui red button" onClick={this.onDelete}>  Delete </button>

                        </td>
                   </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
}
