import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget";
import PaymentsMethods from "../../pages/payments/PaymentsMethods";
import {
  Grid
} from "@material-ui/core";

export default function Payments() {

  return (
    <>

      <center><h3> In order to complete the process of your insurance request please make your
         payment within the next 48 hours or your request will be cancelled </h3>
        <h3> Please choose the payment method </h3>
       
        <Grid item xs={10}>
          <Widget>
            <PaymentsMethods />
          </Widget>
        </Grid>
       {/*  <div className="four wide field">
          <Link to="/app/confirmPayment" className="ui primary button submit-button"  > Next</Link>
        </div> */}
     </center>





    </>
  );
}
