import React, { useState } from "react";
// styles

// components
import PageTitle from "../../components/PageTitle/PageTitle";


// icons sets
import "font-awesome/css/font-awesome.min.css";
import Widget from "../../components/Widget/Widget";


export default function RegisterInsurance() {

    return (
        <>

            <div className="ui main container">
                <form className="ui form" >
                   
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
                            <input type="file" name="receipt" accept="image/png, image/jpeg" /> 
                    
                        </div>
                        <div className="four wide field">
                            <label> Pictures </label>
                            <input type="file" name="receipt" accept="image/png, image/jpeg" /> 
                            
                    
                        </div>
                        <div className="four wide field">
                            <button className="ui primary button submit-button" style={{align:"Left" , marginTop:"30px"}}> Send   </button>
                        </div>
                    </div>
                    
                </form>
            </div>





        </>
    );
}
