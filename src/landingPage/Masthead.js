import React, { Component } from 'react';
import flower from '../images/flower.jpg';
import Carousel from "../pages/carousel/Carousel";

class Masthead extends Component {
    render() {
        return (
            <header class="masthead"  /* style={{background:"url("Components/insurance.jpg")"}} */ >
                <Carousel/>
               {/*  <div class="container">
                    <div class="masthead-subheading">It's Nice To Meet You</div>
                    <div class="masthead-heading text-uppercase"> Insure in a few clicks !</div>
                    <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services"  >Get Started</a>
                </div> */}
            </header>
        );

    }

}
export default Masthead;
/* masthead position:sticky  */