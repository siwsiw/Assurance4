import React from "react";


// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import {
  Publish as Publish,
  Visibility as Visibility,

} from "@material-ui/icons";

export default function TypographyPage() {

  return (
    <>
      <PageTitle title="Refund List" />
      <div className="ui main container">
      <div className="data">
                  <table className="ui celled table">
                      <thead>
                          <tr> 
                              <th style={{width:'50px',textAlign:"center"}}> # </th>
                              <th> the insured object   </th>
                              <th> sending date </th>
                              <th> Request status </th>     
                              <th style={{width:'50px',textAlign:"center"}}> Detail/Download</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td style={{textAlign:"center"}}> 0010 </td>
                              <td> Smartphone : Iphone X </td>
                              <td> 13-05-2021 </td>
                              <td> Accepted</td>
                              <td style={{width:'50px',textAlign:"center"}}> <a href="https:\\www.google.com"> <Visibility/> <Publish/>  </a> </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
                    </div>
      
    </>
  );
}
