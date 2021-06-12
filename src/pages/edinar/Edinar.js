import React, { Component } from 'react'
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

import ConfirmPayment from "../confirmPayment/ConfirmPayment";
import qr from '../../images/qr.png';

export default class Edinar extends Component {




  render() {
    return (
      <>
        <PageTitle title="Pay with E-dinar" />
        <center>
        <div className="fields">
        <div className="four wide field">
        <h1>Please Scan The QR Code Below Using D17 Application</h1>
            <img src={qr} alt="" name="image" />
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
