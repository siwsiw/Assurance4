import React from "react";
import {Link} from "react-router-dom";


// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  Publish as Publish,
  Visibility as Visibility,

} from "@material-ui/icons";

export default function ConfirmPayment() {

  return (
    <>
      <PageTitle title="Confirm Your Payment" />
      <div className="ui main container">
        <form className="ui form" >


          <p>
            <label> Full Name</label>
            <input type="text" name="fullName" />
          </p>
          <p>
            <label> E-mail</label>
            <input type="text" name="email" />
          </p>
          <div className="fields">
            <div className="four wide field">
              <label> Upload your payment receipt</label>
              <input type="file" name="receipt" accept="image/png, image/jpeg" /> 
          </div>
          </div>
          <Link className="ui primary button submit-button" style={{width:"100%"}} to="/app/consultContracts"> Confirm  </Link>
        </form>
      </div>

    </>
  );
}
