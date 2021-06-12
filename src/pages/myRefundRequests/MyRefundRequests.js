import React from "react";

// styles
import useStyles from "./styles";
import PageTitle from "../../components/PageTitle/PageTitle";

import {
    Send as Send,

} from "@material-ui/icons";


export default function myRefundRequests() {
   

    return (

        <div className="ui main container">
            <form className="ui form" >
                <PageTitle title="Refund request" />
                <div className="fields">
                    <div className="four wide field">
                        <label> The object to be reimbursed </label>
                        <select >
                            <option value="" selected>   - </option>
                            <option value="x">x </option>
                            <option value="y"> y</option>
                            <option value="z">z</option>
                        </select>
                    </div>
                </div>
             
                        <label> Problem </label>
                        <textarea rows="9" cols="30" />
             <pre>

                 
             </pre>
                <div className="fields">
                    <div className="four wide field">
                        <div className="btn" >
                            <button className="ui primary button submit-button" > Send  </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}
