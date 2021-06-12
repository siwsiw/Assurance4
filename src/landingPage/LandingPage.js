import React from "react";
import About from "../landingPage/About";
import Clients from "../landingPage/Clients";
import Navigation from "../landingPage/Navigation" ;
import Masthead from "../landingPage/Masthead" ;
import Services from "../landingPage/Services" ;
import PortfolioGrid from "../landingPage/PortfolioGrid" ;
import Team from "../landingPage/Team" ;
import Footer from "../landingPage/Footer" ;
import Contact from "../landingPage/Contact" ;
import Modal1 from "../landingPage/PortfoliosModals/Modal1" ;
import Modal2 from "../landingPage/PortfoliosModals/Modal2" ;
import Modal3 from "../landingPage/PortfoliosModals/Modal3" ;
import Modal4 from "../landingPage/PortfoliosModals/Modal4" ;
import Modal5 from "../landingPage/PortfoliosModals/Modal5" ;
import Modal6 from "../landingPage/PortfoliosModals/Modal6" ;
export default function LandingPage() {

    return (
        <>
            <Navigation />
            <Masthead />
            <Services />
            <PortfolioGrid />
            <About />
            <Team />
            <Clients />
            <Contact />
            <Footer />
            <Modal1 />
            <Modal2 />
            <Modal3 />
            <Modal4 />
            <Modal5 />
            <Modal6 />

        </>
    );
}
