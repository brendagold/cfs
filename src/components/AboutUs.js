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
      <div class="row position-relative">
        <div class="col-12 col-sm-8 col-md-6 col-lg-6">
          <div class="card ml-md-2">
            <img class="card-img" src={image1} alt="Bologna" />
            <div class="card-img-overlay text-white d-flex flex-column justify-content-center"></div>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-6 col-lg-5 contianer-about-card pl-0 shadow-lg">
          <div class="overflow-y-hidden">
            <span class="bg-primary px-3 py-2 overflow-y-hidden text-white font-size-lg">
              We Are
            </span>
          </div>
          <div class="px-3 py-2">
            <h2 class="overflow-y-hidden">Celberus Football Fantasy</h2>
            <p class="font-italic color-gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <p class="card-text">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            <a href="">
              <span class="bg-transparent pt-5 more-link text-dark">More</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
