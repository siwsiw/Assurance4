import React from "react";


// styles


// components
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  Publish as Publish,
  Visibility as Visibility,
  Reply as Reply, 
} from "@material-ui/icons";

export default function InsuranceRequests() {

  return (
    <>
      <PageTitle title="Insurance Requests" />

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
                <th> Reply </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}> 0010 </td>
                <td> Siwar Mejri </td>
                <td> 05-06-2021 </td>
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
                <td style={{  textAlign: "center" }}> <a href="mailto:mej.siwar@gmail.com" > <Reply/>  </a> </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}> 0011 </td>
                <td> Anis chennaoui </td>
                <td> 06-06-2021 </td>
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
                <td style={{  textAlign: "center" }}> <a href="mailto:mej.siwar@gmail.com" > <Reply/>  </a> </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}> 0013 </td>
                <td> Ghada Nefzaoui </td>
                <td> 07-06-2021 </td>
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
                <td style={{  textAlign: "center" }}> <a href="mailto:mej.siwar@gmail.com" > <Reply/>  </a> </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}> 0014 </td>
                <td> Haroun Challouf</td>
                <td> 07-06-2021 </td>
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
                <td style={{  textAlign: "center" }}> <a href="mailto:mej.siwar@gmail.com" > <Reply/>  </a> </td>
              </tr>
              <tr>
                <td style={{ textAlign: "center" }}> 0015 </td>
                <td> Hama Gharbi </td>
                <td> 08-06-2021 </td>
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
                <td style={{  textAlign: "center" }}> <a href="mailto:mej.siwar@gmail.com" > <Reply/>  </a> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
}
