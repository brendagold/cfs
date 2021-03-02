import React from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";

const HighlightWeek = () => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-8">
          <h4 className="scroll-y-hidden font-weight-bold pl-5">HIGHLIGHTS</h4>
          <h4 className="scroll-y-hidden font-weight-bold pl-5">WEEK</h4>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-4">
          <div className="mt-4 scroll-y-hidden">
            {" "}
            <a href="">
              <span className="align-bottom more-link text-dark">More</span>
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 m-0">
          <div className="card ">
            <img className="card-img" src={image1} alt="Card image" />
            <div className="card-img-overlay img-overlay-black">
              <p className="card-text card-text-sizing scroll-y-hidden">
                Match Previews + Week <br />5 Injury Analysis with Dr. <br />
                <span className="text-border-bottom">David </span>Chao
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 m-0">
          <div className="card ">
            <img className="card-img" src={image2} alt="Card image" />
            <div className="card-img-overlay img-overlay-red ">
              <p className="card-text card-text-sizing card-text-position scroll-y-hidden">
                Match Previews + Week <br />5 Injury Analysis with Dr. <br />
                <span className="text-border-bottom">David </span>Chao
              </p>
              <p className="card-text card-text-sizing  text-white font-sm ">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
              <p className="card-text card-text-sizing  text-white font-sm ">
                12 October 2020{" "}
              </p>
              <button className=" card-text card-text-sizing card-button-position font-xs px-3  border-none bg-transparent text-white float-right">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 m-0">
          <div className="card ">
            <img className="card-img" src={image3} alt="Card image" />
            <div className="card-img-overlay img-overlay-black">
              <p className="card-text card-text-sizing scroll-y-hidden">
                Match Previews + Week <br />5 Injury Analysis with Dr. <br />
                <span className="text-border-bottom">David </span>Chao
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 m-0">
          <div className="card ">
            <img className="card-img" src={image4} alt="Card image" />
            <div className="card-img-overlay img-overlay-blue">
              <p className="card-text card-text-sizing scroll-y-hidden">
                Match Previews + Week <br />5 Injury Analysis with Dr. <br />
                <span className="text-border-bottom">David </span>Chao
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 m-0">
          <div className="card ">
            <img className="card-img" src={image5} alt="Card image" />
            <div className="card-img-overlay img-overlay-black">
              <p className="card-text card-text-sizing scroll-y-hidden">
                Match Previews + Week <br />5 Injury Analysis with Dr. <br />
                <span className="text-border-bottom">David </span>Chao
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 p-0 m-0">
          <div className="card ">
            <img className="card-img" src={image6} alt="Card image" />
            <div className="card-img-overlay img-overlay-dark-blue">
              <p className="card-text card-text-sizing scroll-y-hidden">
                Match Previews + Week <br />5 Injury Analysis with Dr. <br />
                <span className="text-border-bottom">David </span>Chao
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighlightWeek;
