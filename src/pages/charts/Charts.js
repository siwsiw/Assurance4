import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Publish as Publish,
  Visibility as Visibility,

} from "@material-ui/icons";

// components
import Widget from "../../components/Widget/Widget";
import ApexLineChart from "./components/ApexLineChart";
import ApexHeatmap from "./components/ApexHeatmap";
import PageTitle from "../../components/PageTitle/PageTitle";



export default function Charts(props) {
  

  return (
    <>
      <PageTitle title="insurance list" />
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
                              <td style={{textAlign:"center"}}> 0010 </td>
                              <td> Smartphone : Iphone X </td>
                              <td> Gold </td>
                              <td> 01-01-2020</td>
                              <td> 01-04-2020</td>
                              <td> Accepted </td>
                              <td> Paid </td>
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