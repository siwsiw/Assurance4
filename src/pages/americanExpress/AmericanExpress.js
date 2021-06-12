import React, { Component } from 'react'
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

import { Link } from "react-router-dom";

import ConfirmPayment from "../confirmPayment/ConfirmPayment";
import sobflouss from '../../images/sobflouss.png';

export default class AmericanExpress extends Component {

  


  render() {
    return (
      <>
        <PageTitle title="Pay with Sob flouss" />
        <center>
        <div className="fields">
        <div className="four wide field">
        <h1>Please Scan The QR Code using your camera</h1>
            <img src={sobflouss} alt="" name="image" width="30%" height="30%" />
            </div>
            <div className="four wide field">
            <Link to="/app/confirmPayment" className="ui primary button submit-button"  > Next</Link>
          </div>
          </div>
      
        </center>
      </>
    )
  }
}
