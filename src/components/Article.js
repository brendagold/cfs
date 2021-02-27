import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image1 from "../images/article1.png";
import image2 from "../images/article2.png";
import image3 from "../images/article3.png";
import image4 from "../images/article4.png";
import $ from "jquery";
import { CarouselWrapper } from "react-pretty-carousel";

const Article = () => {
  const options = {
      dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      450: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
    <div className="row py-4 latest-news-carousel-inner-bg">
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4">
          <h4 className="scroll-y-hidden font-weight-bold pl-5">LATEST</h4>
          <h4 className="scroll-y-hidden font-weight-bold pl-5">
            ARTICLE NEWS
          </h4>
        </div>
      </div>
      <div className="article-caro latest-news-carousel-inner-bg">
        <OwlCarousel
          className="owl-theme"
          className="owl-theme"
          autoplay
          loop
          dots={options.dots}
          responsiveClass
          margin={8}
          responsive={options.responsive}
          autoplayHoverPause={true}
        >
          <div className="item">
            <div className="card latest-news-img-lg">
              <img className="card-img " src={image1} alt="Card image" />
              <div className="card-img-overlay img-overlay-red-gradient">
                <p className="card-text card-text-sizing scroll-y-hidden">
                  Match Previews + Week <br />5 Injury Analysis with Dr. <br />
                  <span className="text-border-bottom">David </span>Chao
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="item">
            <img className="" src={image2} alt="Card image" />
            <div className="card-body latest-news-card-body-md">
              <p className="card-title color-blue font-xxs scroll-y-hidden">
                12 October 2020
              </p>
              <p className="card-text font-weight-bold text-justify t-text">
                Match Previews + Week 5 Injury Analysis with Dr. David Chao
              </p>
              <a href="">
                <span className="align-bottom more-link-sizing more-link text-dark">
                  More
                </span>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="card-horizontal mb-6 ">
              <img className="small-img" src={image3} alt="Card image cap" />
              <div className="card-body bg-white py-0">
                <p className="card-title color-blue font-xxs scroll-y-hidden">
                  12 October 2020
                </p>
                <p className="card-text mb-0 font-weight-bold t-text scroll-y-hidden">
                  Fantasy Football <br />
                  Streaming Picks <br />
                  Week 5
                </p>
                <a href="">
                  <span className="align-bottom more-link-sizing more-link text-dark">
                    More
                  </span>
                </a>
              </div>
            </div>

            <div className="card-horizontal mb-6 ">
              <img className="small-img" src={image4} alt="Card image cap" />
              <div className="card-body bg-white py-0">
                <p className="card-title color-blue font-xxs scroll-y-hidden">
                  12 October 2020
                </p>
                <p className="card-text mb-0 font-weight-bold t-text scroll-y-hidden">
                  Fantasy Football <br />
                  Streaming Picks <br />
                  Week 5
                </p>
                <a href="">
                  <span className="align-bottom more-link-sizing more-link text-dark">
                    More
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* <div>
            <img src={image4} alt="" />
          </div> */}
        </OwlCarousel>
      </div>
      {/* <OwlCarousel class="owl-carousel" options={options}>
  <div><img src={image1} alt=""/></div>
  <div><img src={image2} alt=""/></div>
  <div><img src={image3} alt=""/></div>
  <div><img src={image4} alt=""/></div>
</OwlCarousel>  */}
    </>
  );
};

export default Article;
