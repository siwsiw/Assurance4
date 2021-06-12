import React,{Component} from 'react';
import anis from '../../images/anis.jpg';
import phone from '../../images/phone.jpg';
class Modal2 extends Component {
 render(){
     return(
<div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                               
                                    <h2 class="text-uppercase">voice insurance</h2>
                                    <p class="item-intro text-muted">Anis chennaoui</p>
                                    <img class="img-fluid d-block mx-auto" src={anis} alt="" />
                                    <p> Satisfied men ghadi !</p>
                                    <ul class="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Client: Explore</li>
                                        <li>Category: Graphic Design</li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                                        <i class="fas fa-times mr-1"></i>
                                        Close Testimony
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );

 }

}
export default Modal2;

