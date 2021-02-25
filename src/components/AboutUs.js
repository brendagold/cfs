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
      <div className="row position-relative">
        <div className="col-12 col-sm-8 col-md-6 col-lg-6">
          <div className="card ml-md-2">
            <img className="card-img" src={image1} alt="Bologna" />
            <div className="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-6 col-lg-5 contianer-about-card pl-0 shadow-lg">
          <div className="overflow-y-hidden">
            <span className="bg-primary px-3 py-2 overflow-y-hidden text-white font-size-lg">
              We Are
            </span>
          </div>
          <div className="px-3 py-2">
            <h2 className="overflow-y-hidden">Celberus Football Fantasy</h2>
            <p className="font-italic color-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <p className="card-text">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            <a href="">
              <span className="bg-transparent pt-5 more-link text-dark">More</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
