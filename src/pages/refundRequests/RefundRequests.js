import React from "react";


// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  Publish as Publish,
  Visibility as Visibility,
  Reply as Reply,

} from "@material-ui/icons";

export default function RefundRequests() {

  return (
    <>
      <PageTitle title="Refund Request" />

      <div className="ui main container">
        <div className="data">
          <table className="ui celled table">
            <thead>
              <tr>
                <th style={{ width: '50px', textAlign: "center" }}> # </th>
                <th> Client  </th>
                <th> Date </th>
                <th> Request status</th>
                <th style={{ width: '50px', textAlign: "center" }}> Detail/Download</th>
                <th style={{ textAlign: "center" }}> Reply </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}> 0010 </td>
                <td> Siwar Mejri </td>
                <td> 01-01-2020 </td>
                <td>
                  <div className="fields">
                    <div className="four wide field">
                      <select >
                        <option value="" selected>    </option>
                        <option value="new"> In progress </option>
                        <option value="passable">Accepted </option>
                        <option value="old">Refused</option>
                      </select>
                    </div>
                  </div>
                </td>

                <td style={{ width: '50px', textAlign: "center" }}> <a href="https:\\www.google.com"> <Visibility /> <Publish />  </a> </td>
                <td style={{ textAlign: "center" }}> <a href="mailto:mej.siwar@gmail.com" > <Reply />  </a> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
