import React, { Component } from 'react'
import "./style.css";
import { Link } from "react-router-dom";
export default class PaymentsMethods extends Component {

  render() {
    return (
      <>
      <div className="CustomedRadio">
          <Link to="/app/edinar" className="ui primary button submit-button"  > E-dinar</Link>
        </div>
        
        <div className="CustomedRadio">
          <Link to="/app/americanExpress" className="ui primary button submit-button"  > Sob Flouss</Link>
        </div>
        <div className="CustomedRadio">
          <Link to="/app/bankTransfer" className="ui primary button submit-button"  >  Bank Transfer</Link>
        </div>
        


          {/* <div onChange={this.onChangeValue}>
            <div className="CustomedRadio">
              <input type="radio" value="edinar" name="paymentCard" /> E-dinar
        </div>
            <div className="CustomedRadio">
              <input type="radio" value="masterCard" name="paymentCard" /> Master Card
            </div>
            <div className="CustomedRadio">
              <input type="radio" value="americanExpress" name="paymentCard" /> American Express
        </div>
            <div className="CustomedRadio">
              <input type="radio" value="bankTransfer" name="paymentCard" /> Bank Transfer
            </div>
            <div className="CustomedRadio">
              <input type="radio" value="mondat" name="paymentCard" /> Mondat
        </div>
          </div>
          <div className="four wide field">
          <button className="ui primary button submit-button"  onClick={this.fff}> Next </button>
        </div>
 */}
      </>
    )
  }
}
