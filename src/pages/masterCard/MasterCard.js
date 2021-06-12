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

export default class MasterCard extends Component {

  

  
  render() {
    return (
      <>
            <PageTitle title="Pay with Master Card" />

    <div className="four wide field">
          <Link to="/app/confirmPayment" className="ui primary button submit-button"  > Next</Link>
        </div> 
      </>
    )
  }
}
