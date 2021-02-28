import React from "react";
import "./css/hero.css";

const Hero = () => {
  return (
    <>
      <div class="product-slider">
        <div id="carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="item active">
              {" "}
              <img src="http://placehold.it/1600x700?text=Product+01" />{" "}
            </div>
            <div class="item">
              {" "}
              <img src="http://placehold.it/1600x700?text=Product+02" />{" "}
            </div>
            <div class="item">
              {" "}
              <img src="http://placehold.it/1600x700?text=Product+03" />{" "}
            </div>
            <div class="item">
              {" "}
              <img src="http://placehold.it/1600x700?text=Product+04" />{" "}
            </div>
            <div class="item">
              {" "}
              <img src="http://placehold.it/1600x700?text=Product+05" />{" "}
            </div>
          </div>
        </div>
        <div class="clearfix">
          <div id="thumbcarousel" class="carousel slide" data-interval="false">
            <div class="carousel-inner">
              <div class="item active">
                <div data-target="#carousel" data-slide-to="0" class="thumb">
                  <img src="http://placehold.it/100x80?text=Thumb+01" />
                </div>
                <div data-target="#carousel" data-slide-to="1" class="thumb">
                  <img src="http://placehold.it/100x80?text=Thumb+02" />
                </div>
                <div data-target="#carousel" data-slide-to="2" class="thumb">
                  <img src="http://placehold.it/100x80?text=Thumb+03" />
                </div>
                <div data-target="#carousel" data-slide-to="3" class="thumb">
                  <img src="http://placehold.it/100x80?text=Thumb+04" />
                </div>
                <div data-target="#carousel" data-slide-to="4" class="thumb">
                  <img src="http://placehold.it/100x80?text=Thumb+05" />
                </div>
              </div>
            </div>
            <a
              class="left carousel-control"
              href="#thumbcarousel"
              role="button"
              data-slide="prev"
            >
              {" "}
              <i class="fa fa-angle-left" aria-hidden="true"></i>{" "}
            </a>{" "}
            <a
              class="right carousel-control"
              href="#thumbcarousel"
              role="button"
              data-slide="next"
            >
              <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
