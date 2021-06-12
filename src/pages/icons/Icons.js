import React, { useState } from "react";
import {
    Send as Send ,

} from "@material-ui/icons";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";


// icons sets
import "font-awesome/css/font-awesome.min.css";
import Widget from "../../components/Widget/Widget";
import ApexLineChart from "./ApexLineChart";

export default function IconsPage() {

    return (
        <>

            <div className="ui main container">
                <form className="ui form" >
                    {/*  <h3> <span> Personal informations  </span> </h3>
                    <div className="fields">
                        <div className="four wide field">
                            <label> First Name</label>
                            <input type="text" name="firstName" placeholder="First name" />
                        </div>
                        <div className="four wide field">
                            <label> Last Name</label>
                            <input type="text" name="lastName" placeholder="Last name" />
                        </div>
                        <div className="four wide field">
                            <label> Nic Number</label>
                            <input type="text" name="nicNumber" placeholder="NIC Number" />
                        </div>
                        <div className="four wide field">
                            <label> Mobile Phone</label>
                            <input type="text" name="mobilePhone" placeholder="Mobile Phone" />
                        </div>
                        <div className="four wide field">
                            <label> E-mail</label>
                            <input type="email" name="email" placeholder="xyz@exemple.com" />
                        </div>

                    </div> */}
                    <PageTitle title="the insured object informations" />
                    <div className="fields">
                        <div className="four wide field">
                            <label> Object Name</label>
                            <input type="text" name="objectnme" placeholder="Object Name" />
                        </div>
                        <div className="four wide field">
                            <label> Type </label>
                            <select >
                                <option value="" selected>    - </option>
                                <optgroup label="Accessories">
                                    <option value="sunglass">Sunglass </option>
                                    <option value="Opticglass">Optic glass</option>
                                    <option value="watch">Watch</option>
                                </optgroup>
                                <optgroup label="Smart devices">
                                    <option value="smartphone">Smartphone</option>
                                    <option value="smartwatch">Smart watch </option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="four wide field">
                            <label> State </label>
                            <select >
                                <option value="" selected>   - </option>
                                <option value="new"> New </option>
                                <option value="passable">passable</option>
                                <option value="old">old</option>
                            </select>
                        </div>
                        <div className="four wide field">
                            <label> Pack  </label>
                            <select >
                                <option selected>   - </option>
                                <option value="gold"> Gold </option>
                                <option value="silver">Silver</option>
                                <option value="bronze">Bronze</option>
                            </select>
                        </div>
                    </div>

                    <div className="fields">
                        <div className="four wide field">
                            <label> Proof of value/Contract</label>
                            <button> choose file</button> No file chosen
                    
                        </div>
                        <div className="four wide field">
                            <label> Pictures </label>
                            <button> choose file</button> No file chosen
                    
                        </div>
                        <div className="four wide field">
                            <button className="ui primary button submit-button" style={{align:"Left"}}> Send   </button>
                        </div>
                    </div>
                    
                </form>
            </div>





        </>
    );
}
