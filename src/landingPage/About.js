import React,{Component} from 'react';
import logo from "../images/logo.png" ; 
import register from '../images/register.png';
import form from '../images/form.png';
import tick from '../images/tick.jpg';
import epay from '../images/epay.jpg';

class About extends Component {
 render(){
     return(
        <section class="page-section" id="about">
        <div class="container" >
            <div class="text-center">
                <h2 class="section-heading text-uppercase">About</h2>
                <h3 class="section-subheading text-muted"> How to start ?</h3>
            </div>
            <ul class="timeline" >
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid"  src={register} alt="" /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>Step 1 :</h4>
                            <h4 class="subheading">Register</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted"> Just fill the form </p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={form} alt="" /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>Step 2 :</h4>
                            <h4 class="subheading">Fill up the online insurance quotation </h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={tick} alt="" /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>Step 3 : </h4>
                            <h4 class="subheading">Get the confirmation</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={epay} alt="" /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>July 2014</h4>
                            <h4 class="subheading">Pay online</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted"> After receiving the confirmation you can pay online and  </p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image">
                        <h4>
                            Be Part
                            <br />
                            Of Our
                            <br />
                            Story!//Join Us
                        </h4>
                    </div>
                </li>
            </ul>
        </div>
    </section>
     );
        
         }
        
        }
 
export default About;