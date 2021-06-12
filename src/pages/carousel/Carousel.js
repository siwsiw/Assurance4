import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./styles.css";
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import landingPage from "../../images/landingPage.jpg";

const MyCarouselWithDots = () => {
  const [value, setValue] = useState(0);

  const onChange = value => {
    setValue(value);
  }
  const slides = [
    (<div className="bg" >
      <div class="masthead-subheading">It's Nice To Meet You</div>
      <div class="masthead-heading text-uppercase"> Insure in a few clicks !</div>
      <Link class="btn btn-primary btn-x text-uppercase js-scroll-trigger"
        to="/login"
        style={{
          fontweight: "bold", fontFamily: "Montserrat, -apple-system,  Arial, sans-serif",
          fontSize: "1.000rem", fontWeight: "700"
        }}>Get Started</Link>
    </div>),
    (<img className="carImg" src={landingPage} />),
    (<img className="carImg" src={img2} />),
    (<img className="carImg" src={img3} />),
  ]
  return (
    <div style={{ width: "100%", height: "500px", marginTop: "-150px", alignItems: "center" }}>
      <Carousel
        value={value}
        onChange={onChange}
        plugins={['arrows']}
        slides={slides}
      />
      <Dots
        value={value}
        onChange={onChange}
        number={slides.length}
      />
    </div>
  );
};

export default MyCarouselWithDots;