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

export default class BankTransfer extends Component {




  render() {
    return (
      <>
        <PageTitle title="Pay with Bank Transfer" />
        <center>
        <h1>             RIB : 5359 4050 2428 6285 </h1>     
        <div className="four wide field">
          <Link to="/app/confirmPayment" className="ui primary button submit-button"  > Next</Link>
        </div>
        </center>
      </>
    )
  }
}
