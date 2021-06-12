import React from "react";


// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";


export default function Add() {

  return (
    <>
      <PageTitle title="Personnel Informations " />
      <div className="ui main container">
        <form className="ui form" >
          <div className="fields">
            <div className="four wide field">
              <label> First Name</label>
              <input type="text" name="firstName" placeholder="First name" />
            </div>
            <div className="four wide field">
              <label> Last Name</label>
              <input type="text" name="lastName" placeholder="Last name" />
            </div>
            <div className="four wide field">
              <label> Nic Number</label>
              <input type="text" name="nicNumber" placeholder="NIC Number" />
            </div>
          </div>
          <div className="fields">
            <div className="four wide field">
              <label> Mobile Phone</label>
              <input type="text" name="mobilePhone" placeholder="Mobile Phone" />
            </div>
            <div className="four wide field">
              <label> E-mail</label>
              <input type="email" name="email" placeholder="xyz@exemple.com" />
            </div>
            <div className="four wide field">
              <label> Password</label>
              <input type="password" name="password" placeholder="*************" />
            </div>
          </div>

          
            <div className="four wide field">
              <PageTitle title="Permissions " />
            </div>
            <div className="fields">
            <div className="four wide field">  
            <input type="checkbox" id="p4" name="permission" /> Can manage admins
            </div>
            <div className="four wide field">  
            <input type="checkbox" id="p4" name="permission" /> Can manage staff
            </div>
            <div className="four wide field">  
            <input type="checkbox" id="p4" name="permission" /> Can manage clients
            </div>
            </div>
            
            <div className="fields">
            <div className="four wide field">      
            <input type="checkbox" id="p1" name="permission" />  Can manage the Insurance Requests
            </div>   
            <div className="four wide field">      
            <input type="checkbox" id="p3" name="permission" />  Can manage the refund Requests 
            </div>
            <div className="four wide field">  
            <input type="checkbox" id="p2" name="permission" />  Can manage the payments
            </div>
            </div>
            
            <div className="fields">
            <div className="four wide field">  
            <input type="checkbox" id="p4" name="permission"  /> Can view admins informations
            </div>
            <div className="four wide field">  
            <input type="checkbox" id="p4" name="permission"  /> can view stuff informations
            </div>
            <div className="four wide field">  
            <input type="checkbox" id="p4" name="permission"  /> can respond to messages from customers
            </div>

          </div>
          <div className="fields">
            <div className="four wide field">
              <button className="ui primary button submit-button" > Add </button>
            </div>
          </div>
        </form>
      </div>


    </>
  );
}
