import React from "react";
import image1 from "../images/about.png";

const AboutUs = () => {
  return (
    <>
      <div className="row my-5  text-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 scroll-y-hidden">
          <h2 className=" font-weight-bold d-inline">About us</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="about-background pl-5">
            <img src={image1} alt="about" />
          </div>
          <div className="container position-absolute about-us-container">
            <div className="aboutus-card-body  px-0 shadow-lg bg-white py-0 scroll-y-hidden">
              <div className="card-title bg-primary font-lg about-card-title text-white">
                We Are
              </div>
              <p className="card-text mb-0 font-italic color-gray">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <p className="card-text mb-0 ">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <br />
              <a href="">
                <span className="bg-transparent pt-5 more-link text-dark">
                  More
                </span>
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
