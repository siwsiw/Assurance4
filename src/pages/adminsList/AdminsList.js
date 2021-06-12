import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
// components
import PageTitle from "../../components/PageTitle/PageTitle";


Modal.setAppElement('#root')
export default function AdminsList() {
  const [data, setData] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  useEffect(() => {
    axios.get('http://localhost/apitesttt/public/api/cour')
      .then(response => {
        setData(response.data);
      });
  }, [])

  const onDelete = (id) => {

  }

  return (
    <>
      <PageTitle title="Admins List " />
      <Link to="/app/add" className="mini ui blue button" style={{ marginLeft: "90%" }}>  Add Admin </Link>
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
              {
                data.map(row => {
                  return (
                    <tr key={row.id}>
                      <td style={{ textAlign: "center" }}> {row.id} </td>
                      <td> {row.name_cour} </td>
                      <td> {row.id_prof}</td>
                      <td>
                        <button className="mini ui blue button" onClick={() => setModalIsOpen(true)}>  Edit</button>
                        <button className="mini ui red button" onClick={onDelete}>  Delete </button>

                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={
          {
            overlay: {
              position: 'fixed',
              top: 20,
              left: 80,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              paddingLeft: "50px"
            },
            content: {
              position: 'absolute',
              top: '50px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }


          }}
      >
        {
          data.map(row => {
            return (
              <form className="ui form" >
                <div className="fields">
                  <div className="four wide field">
                    <label> First Name</label>
                    <input type="text" name="firstName" placeholder="First name" value={row.name_cour}/>  
                  </div>
                  <div className="four wide field">
                    <label> Last Name</label>
                    <input type="text" name="lastName" placeholder="Last name" value={row.file} />
                  </div>
                  <div className="four wide field">
                    <label> Nic Number</label>
                    <input type="text" name="nicNumber" placeholder="NIC Number" value={row.id_prof}/>
                  </div>
                </div>
                <div className="fields">
                  <div className="four wide field">
                    <label> Mobile Phone</label>
                    <input type="text" name="mobilePhone" placeholder="Mobile Phone" value={row.created_at} />
                  </div>
                  <div className="four wide field">
                    <label> E-mail</label>
                    <input type="email" name="email" placeholder="xyz@exemple.com" value={row.name_matiere} />
                  </div>
                  <div className="four wide field">
                    <label> Password</label>
                    <input type="password" name="password" placeholder="*************" value={row.updated_at} />
                  </div>
                </div>
                <div className="fields">
                  <div className="four wide field">
                    <button className="ui primary button submit-button" > Modify </button>
                  </div>
                </div>

              </form>
            );
          })}
          < div >
          <button className="mini ui red button" onClick={() => setModalIsOpen(false)}> Close </button>
        </div>
    </Modal>
    </>
  );
}
