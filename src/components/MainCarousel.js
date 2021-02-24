import React from "react";
import image1 from "../images/banner03.png";

const MainCarousel = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators  top-carousel-indicators mx-0 ext-left bg-transparent">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block text-left pl-5 bg-transparent">
                <span className="bg-primary scroll-y-hidden px-2 py-1 font-weight-bold">
                  Club
                </span>
                <h1 className="bg-transparent scroll-y-hidden mt-2">WEEK</h1>
                <h1 className="bg-transparent scroll-y-hidden">
                  <span className="color-blue bg-transparent">5</span> PRIMER
                </h1>
                <p className="bg-transparent color-gray font-size">
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry.
                </p>
                <br />
                <br />
                <br />
                <a href="">
                  <span className="bg-transparent pt-5 more-link">More</span>
                </a>
                <br />
              </div>
            </div>
            <div className="carousel-item ">
              <img src={image1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block text-left pl-5 bg-transparent">
                <span className="bg-primary scroll-y-hidden px-2 py-1 font-weight-bold">
                  Club
                </span>
                <h1 className="bg-transparent scroll-y-hidden mt-2">WEEK</h1>
                <h1 className="bg-transparent scroll-y-hidden">
                  <span className="color-blue bg-transparent">5</span> PRIMER
                </h1>
                <p className="bg-transparent color-gray font-size">
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry.
                </p>
                <br />
                <br />
                <br />
                <a href="">
                  <span className="bg-transparent pt-5 more-link">More</span>
                </a>
                <br />
              </div>
            </div>
            <div className="carousel-item ">
              <img src={image1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block text-left pl-5 bg-transparent">
                <span className="bg-primary scroll-y-hidden px-2 py-1 font-weight-bold">
                  Club
                </span>
                <h1 className="bg-transparent scroll-y-hidden mt-2">WEEK</h1>
                <h1 className="bg-transparent scroll-y-hidden">
                  <span className="color-blue bg-transparent">5</span> PRIMER
                </h1>
                <p className="bg-transparent color-gray font-size">
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry.
                </p>
                <br />
                <br />
                <br />
                <a href="">
                  <span className="bg-transparent pt-5 more-link">More</span>
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
