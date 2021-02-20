import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./css/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <Carousel showArrows={false}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/banner03.png`} />
          <div className="hero-content">
            <h5 className="tag upper">Club</h5>

            <h3 className="hero-title upper">
              Week <br /> <span>5</span> Primer
            </h3>
            <p className="hero-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Vitae quae minus numquam nobis dolorem quibusdam?
            </p>

            <a className="hero-btn upper">more</a>
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/banner03.png`} />
          <div className="hero-content">
            <h5 className="tag upper">Sports</h5>

            <h3 className="hero-title upper">
              Week <br /> <span>6</span> Premium
            </h3>
            <p className="hero-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Vitae quae minus numquam nobis dolorem quibusdam?
            </p>

            <a className="hero-btn upper">more</a>
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/banner03.png`} />
          <div className="hero-content">
            <h5 className="tag upper">Party</h5>

            <h3 className="hero-title upper">
              Week <br /> <span>8</span> Primer
            </h3>
            <p className="hero-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Vitae quae minus numquam nobis dolorem quibusdam?
            </p>

            <a className="hero-btn upper">more</a>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
