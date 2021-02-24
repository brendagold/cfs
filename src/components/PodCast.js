import React, {Component} from 'react';
import image2 from "../images/podcast1.png";
import image1 from "../images/01.png";
import image3 from "../images/03.png";
import $ from 'jquery';

class PodCast extends Component {
    componentDidMount() {
        window.$('#podCastCarousel').carousel({
            interval: 10000
        })

        $('.podCastCarousel .podCastCarousel-item').each(function () {
            var minPerSlide = 3;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
    }

    render() {
        return (
            <>
                 <div className="row my-4 mr-1 text-center">
           <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 scroll-y-hidden">
                <h2 className=" font-weight-bold d-inline">PODCAST</h2>
                <div className="float-right">
               <a className="carousel-control-next w-auto font-xs px-3 right-xs text-dark border   " href="#podCastCarousel" role="button" data-slide="next">
                                <i className="fas fa-arrow-right"></i>
                </a>
               <a className="carousel-control-next w-auto font-xs   right-sm px-3 text-dark border " href="#podCastCarousel" role="button" data-slide="prev">
                                <i className="fas fa-arrow-left"></i>
                </a>
                    </div>
            </div>
         </div>
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="row my-3 mx-1">
                        <div id="podCastCarousel" className="carousel podCastCarousel slide w-100" data-ride="carousel">
                            <div className="carousel-inner w-100" role="listbox">
                                <div className="carousel-item podCastCarousel-item active">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img className="img-fluid" src={image1}/>
                                            <div className="card-img-overlay img-overlay-light pl-5 pt-5">
                                                    <p className="card-text font-sm"><i className="fas fa-video"></i></p>
                                                    <h3 className="card-text pb-3 scroll-y-hidden">Week 5 Fantasy<br/> Projections + Notes</h3>

                                                <a href=""><span className="align-bottom more-link text-dark">More</span></a>
                                                    <br/>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item podCastCarousel-item">
                                    <div className="col-md-4">
                                       <div className="card">
                                            <img className="img-fluid" src={image2}/>
                                            <div className="card-img-overlay img-overlay-blue-gradient text-white pl-5 pt-5">
                                                    <p className="card-text font-sm"><i className="fas fa-video"></i></p>
                                                    <h3 className="card-text pb-3 scroll-y-hidden">Week 5 Fantasy<br/> Projections + Notes</h3>

                                                <a href=""><span className="align-bottom more-link ">More</span></a>
                                                    <br/>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item podCastCarousel-item">
                                    <div className="col-md-4">
                                  <div className="card">
                                            <img className="img-fluid" src={image3}/>
                                            <div className="card-img-overlay img-overlay-light pl-5 pt-5">
                                                    <p className="card-text font-sm"><i className="fas fa-camera"></i></p>
                                                    <h3 className="card-text pb-3 scroll-y-hidden">Week 5 Fantasy<br/> Projections + Notes</h3>

                                                <a href=""><span className="align-bottom more-link text-dark">More</span></a>
                                                    <br/>
                                                </div>
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
    }
}

export default PodCast;
