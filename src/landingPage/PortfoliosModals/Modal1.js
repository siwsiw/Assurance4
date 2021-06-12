import React,{Component} from 'react';
import siw from '../../images/siw.jpg';
class Modal1 extends Component {
 render(){
     return(
<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                            
                                    <h2 class="text-uppercase">Phone insurance </h2>
                                    <p class="item-intro text-muted">Siwar Mejri</p>
                                    <img class="img-fluid d-block mx-auto"  width ="200px" height="200px"src={siw} alt="" />
                                    <p>i am satisfied byyyye!</p>
                                    <ul class="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Client: Siwar</li>
                                        <li>Category:Smart devices </li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                                        <i class="fas fa-times mr-1"></i>
                                        Close testimony
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
export default Modal1;
