import React from "react";
import image1 from "../images/banner03.png";
import image4 from "../images/article4.png";
import image5 from "../images/footer.png";
import "./css/mainCarousel.css";

const MainCarousel = () => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators  top-carousel-indicators mx-0 ext-left bg-transparent">
            <li
              data-target="#carouselIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-block  text-left pl-md-5 bg-transparent">
                <span className="bg-primary scroll-y-hidden px-md-2 py-md-1 font-weight-bold">
                  Club
                </span>
                <h1 className="bg-transparent scroll-y-hidden mt-md-2">WEEK</h1>
                <h1 className="bg-transparent scroll-y-hidden">
                  <span className="color-blue bg-transparent">5</span> PRIMER
                </h1>
                <p className="bg-transparent mb-0 mb-md-1 color-gray-light font-size">
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry.
                </p>
                <a href="">
                  <span className="bg-transparent pt-md-5 more-link">More</span>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-block  text-left pl-md-5 bg-transparent">
                <span className="bg-primary scroll-y-hidden px-md-2 py-md-1 font-weight-bold">
                  Club
                </span>
                <h1 className="bg-transparent scroll-y-hidden mt-md-2">WEEK</h1>
                <h1 className="bg-transparent scroll-y-hidden">
                  <span className="color-blue bg-transparent">5</span> PRIMER
                </h1>
                <p className="bg-transparent mb-0 mb-md-1 color-gray-light font-size">
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry.
                </p>
                <a href="">
                  <span className="bg-transparent pt-md-5 more-link">More</span>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-block  text-left pl-md-5 bg-transparent">
                <span className="bg-primary scroll-y-hidden px-md-2 py-md-1 font-weight-bold">
                  Club
                </span>
                <h1 className="bg-transparent scroll-y-hidden mt-md-2">WEEK</h1>
                <h1 className="bg-transparent scroll-y-hidden">
                  <span className="color-blue bg-transparent">5</span> PRIMER
                </h1>
                <p className="bg-transparent mb-0 mb-md-1 color-gray-light font-size">
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry.
                </p>
                <a href="">
                  <span className="bg-transparent pt-md-5 more-link">More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item ">
          <div
            data-target="#carouselIndicators"
            data-slide-to="1"
            className="thumb"
          >
            <div className="card-vertical mb-6 ">
              <img className="small-img" src={image5} alt="Card image cap" />
              <div className="card-body bg-blue py-0">
                <p className="card-title  font-xxs scroll-y-hidden">
                  12 October 2020
                </p>
                <p className="card-text mb-0 font-weight-bold t-text scroll-y-hidden">
                Match Previews + Week <br />5  Analysis with Dr. 
                <span className="">David </span>Chao
                </p>
                <a href="">
                  <span className="align-bottom more-link-sizing thumb-link">
                    More
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            data-target="#carouselIndicators"
            data-slide-to="2"
            className="thumb"
          >
            <div className="card-vertical mb-6 ">
              <img className="small-img" src={image4} alt="Card image cap" />
              <div className="card-body bg-blue py-0">
                <p className="card-title font-xxs scroll-y-hidden">
                  12 October 2020
                </p>
                <p className="card-text mb-0 font-weight-bold t-text scroll-y-hidden">
                Match Previews + Week <br />5 Injury Analysis with Dr. 
                <span className="">David </span>Chao
                </p>
                <a href="">
                  <span className="align-bottom more-link-sizing thumb-link">
                    More
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="clearfix">
        <div id="thumbcarousel" class="carousel slide" data-interval="false">
         
            <div class="item ">
              <div data-target="#carouselIndicators" data-slide-to="1" class="thumb">
              <img src="http://placehold.it/100x80?text=Thumb+01" />
              </div>
              <div data-target="#carouselIndicators" data-slide-to="2" class="thumb">
                <img src="http://placehold.it/100x80?text=Thumb+02" />
              </div>
            </div>
          
        </div>
      </div> */}
    </div>
  );
};

export default MainCarousel;
