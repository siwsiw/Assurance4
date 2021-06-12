import React, { useState } from "react";
import {Link} from "react-router-dom";

import {
  Publish as Publish,
  Visibility as Visibility,

} from "@material-ui/icons";

// components

import PageTitle from "../../components/PageTitle/PageTitle";

export default function MyRefunds(props) {
  

  return (
    <>
      <PageTitle title="My contracts" />
      <div className="ui main container">
      <div className="data">
                  <table className="ui celled table">
                      <thead>
                          <tr> 
                              <th style={{width:'50px',textAlign:"center"}}> # </th>
                              <th> the insured object   </th>
                              <th> Pack </th>
                              <th> Effective Date </th>
                              <th> Due Date </th>
                              <th> Request status </th>
                              <th> Payement status </th>
                              <th style={{width:'50px',textAlign:"center"}}> Detail/Download</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td style={{textAlign:"center"}}> 0001 </td>
                              <td> Smartphone : Iphone X </td>
                              <td> Gold </td>
                              <td> 05-01-2021</td>
                              <td> 05-03-2010</td>
                              <td> Accepted </td>
                              <td > 
                              <Link  to="/app/payments" className="ui primary button submit-button"  > Pay </Link>
                              </td>
                              <td style={{width:'50px',textAlign:"center"}}> <a href="https:\\www.google.com"> <Visibility/> <Publish/>  </a> </td>
                          </tr>
                          <tr>
                              <td style={{textAlign:"center"}}> 0002 </td>
                              <td> sunglasses : sunglasses  Dior </td>
                              <td> Silver</td>
                              <td> 10-06-2021</td>
                              <td> 10-07-2021</td>
                              <td> Accepted </td>
                              <td > 
                              <Link  to="/app/payments" className="ui primary button submit-button"  > Pay </Link>
                              </td>
                              <td style={{width:'50px',textAlign:"center"}}> <a href="https:\\www.google.com"> <Visibility/> <Publish/>  </a> </td>
                          </tr>
                          <tr>
                              <td style={{textAlign:"center"}}> 0003 </td>
                              <td> Watch : Rolex </td>
                              <td> Silver </td>
                              <td> 11-06-2021</td>
                              <td> 11-07-2021</td>
                              <td> Refused</td>
                              <td > 
                              <Link  to="/app/payments" className="ui primary button submit-button"  > Pay </Link>
                              </td>
                              <td style={{width:'50px',textAlign:"center"}}> <a href="https:\\www.google.com"> <Visibility/> <Publish/>  </a> </td>
                          </tr>
                          <tr>
                              <td style={{textAlign:"center"}}> 0004 </td>
                              <td> Jewerly : Gold ring </td>
                              <td> Silver </td>
                              <td> 11-06-2021</td>
                              <td> 11-07-2021</td>
                              <td> Accepted </td>
                              <td > 
                              <Link  to="/app/payments" className="ui primary button submit-button"  > Pay </Link>
                              </td>
                              <td style={{width:'50px',textAlign:"center"}}> <a href="https:\\www.google.com"> <Visibility/> <Publish/>  </a> </td>
                          </tr>
                          <tr>
                              <td style={{textAlign:"center"}}> 0002 </td>
                              <td> sunglasses : sunglasses  Plice </td>
                              <td> Bronze </td>
                              <td> 12-06-2021</td>
                              <td> 12-09-2021</td>
                              <td> In progress  </td>
                              <td > 
                              <Link  to="/app/payments" className="ui primary button submit-button"  > Pay </Link>
                              </td>
                              <td style={{width:'50px',textAlign:"center"}}> <a href="https:\\www.google.com"> <Visibility/> <Publish/>  </a> </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
                    </div>
      
            
    </>
  );
}

// ################################################################