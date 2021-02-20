import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./css/articles.css";

const Articles = () => {
  return (
    <div className="articles">
      <div className="article-header">
        <h3>
          LATEST <br /> ARTICLES NEWS
        </h3>
      </div>
      <Carousel>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/image1.png`} />

         
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/image1.png`} />
         
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/image1.png`} />
          
        </div>
      </Carousel>

      <div className="columns">
        <div className="column ">
          <div className="second-container">
            <img src={`${process.env.PUBLIC_URL}/images/image2.png`} />
            <div className="second-content">
              <h5 className="upper article-date">12 october 2020</h5>
              <h3 className="article-title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis, repellat.
              </h3>
              <a className="article-btn upper">more</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/pinkJ.png`} />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/image4.png`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
