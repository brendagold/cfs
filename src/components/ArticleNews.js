import React from "react";
import image1 from "../images/article1.png";
import image2 from "../images/article2.png";
import image3 from "../images/article3.png";
import image4 from "../images/article4.png";

const ArticleNews = () => {
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
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div
            id="carousel2ExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators mx-0 ext-left bg-transparent">
              <li
                data-target="#carousel2ExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carousel2ExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carousel2ExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner latest-news-carousel-inner-bg">
              <div className="carousel-item active">
                <div className="card latest-news-img-lg">
                  <img className="card-img " src={image1} alt="Card image" />
                  <div className="card-img-overlay img-overlay-red-gradient">
                    <p className="card-text card-text-sizing scroll-y-hidden">
                      Match Previews + Week <br />5 Injury Analysis with Dr.{" "}
                      <br />
                      <span className="text-border-bottom">David </span>Chao
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="card d-none d-sm-block latest-news-card-md">
                  <img
                    className="card-img-top "
                    src={image2}
                    alt="Card image"
                  />
                  <div className="card-body latest-news-card-body-md">
                    <p className="card-title color-blue font-xxs scroll-y-hidden">
                      12 October 2020
                    </p>
                    <p className="card-text font-weight-bold text-justify t-text">
                      Match Previews + Week 5 Injury Analysis with Dr. David
                      Chao
                    </p>
                    <a href="">
                      <span className="align-bottom more-link-sizing more-link text-dark">
                        More
                      </span>
                    </a>
                  </div>
                </div>
                <div className="card latest-news-card-sm d-none d-md-block">
                  <div className="card-horizontal ">
                    <img
                      className="card-img-left"
                      src={image3}
                      alt="Card image cap"
                    />
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
                <div className="card latest-news-card-two-sm d-none d-md-block">
                  <div className="card-horizontal">
                    <img
                      className="card-img-left"
                      src={image4}
                      alt="Card image cap"
                    />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleNews;
