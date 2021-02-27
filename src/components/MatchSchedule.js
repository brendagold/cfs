import React, {Component} from 'react';
import flag1 from "../images/flag1.png";
import flag2 from "../images/flag3.png";
import flag3 from "../images/flag4.png";
import flag4 from "../images/flag5.png";
import flag5 from "../images/flag6.png";
import $ from "jquery";
class MatchSchedule extends Component {
    componentDidMount() {
        window.$('#matchScheduleCarousel').carousel({
            interval: 10000
        })

        $('.matchScheduleCarousel .matchScheduleCarousel-item').each(function () {
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
            <div className="row pt-4 bg-black">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                <h4 className="scroll-y-hidden font-weight-bold pl-5">Game</h4>
                <h4 className="scroll-y-hidden font-weight-bold pl-5">Schedule</h4>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 pl-5">
                  <div className="mt-md-4 scroll-y-hidden"> <a href=""><span className="align-bottom more-link1">More</span></a><br/><br/></div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4  col-6 scroll-y-hidden">
                    <div className="float-right"> <span className="text-black-50">s</span>
                       <a className="carousel-control-next w-auto font-xs px-3 h-fit-content py-2 right-xs text-white border" href="#matchScheduleCarousel" role="button" data-slide="next">
                                        <i className="fas fa-arrow-right"></i>
                        </a>
                       <a className="carousel-control-next w-auto font-xs h-fit-content py-2  right-sm px-3 text-white border" href="#matchScheduleCarousel" role="button" data-slide="prev">
                                        <i className="fas fa-arrow-left"></i>
                        </a>
                    </div>
                </div>
        </div>
         <div className="row bg-black">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="row my-3 mx-1">
                        <div id="matchScheduleCarousel" className="carousel  matchScheduleCarousel slide w-100" data-ride="carousel">
                            <div className="carousel-inner w-100" role="listbox">
                                <div className="carousel-item matchScheduleCarousel-item active ">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="card d-inline-imp mt-md-3 ml-md-5 bg-black">
                                           <div className="float-left">
                                               <figure className="figure">
                                                  <img src={flag1} className="figure-img img-fluid rounded pl-md-4" alt="A generic square placeholder image with rounded corners in a figure."/>
                                                   <p className="pt-3 pl-3 d-inline">2</p>
                                                   <p className="pt-3 pl-3 d-inline">:</p>
                                                  <figcaption className="figure-caption">ROTHERHAM</figcaption>
                                                </figure>
                                           </div>
                                           <div className="float-left">
                                               <figure className="figure">
                                               <p className="position-absolute first-right-score-position">5</p> <img src={flag5} className="figure-img img-fluid rounded pl-5" alt="A generic square placeholder image with rounded corners in a figure."/>
                                                  <figcaption className="figure-caption text-right">OXFORD UTD</figcaption>
                                                </figure>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item matchScheduleCarousel-item  ">
                                     <div className="col-md-6 col-lg-4">
                                        <div className="card d-inline-imp mt-md-3 ml-md-5 bg-black">
                                           <div className="float-left">
                                               <figure className="figure">
                                                  <img src={flag1}className="figure-img img-fluid rounded pl-4" alt="A generic square placeholder image with rounded corners in a figure."/>
                                                   <p className="pt-3 pl-3 d-inline">2</p>
                                                   <p className="pt-3 pl-3 d-inline">:</p>
                                                  <figcaption className="figure-caption ">ROTHERHAM</figcaption>
                                                </figure>
                                           </div>
                                           <div className="float-left">
                                               <figure className="figure">
                                               <p className="position-absolute second-right-score-position">5</p> <img src={flag1} className="figure-img img-fluid rounded pl-5" alt="A generic square placeholder image with rounded corners in a figure."/>
                                                  <figcaption className="figure-caption  text-right">OXFORD UTD</figcaption>
                                                </figure>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item matchScheduleCarousel-item ">
                                     <div className="col-md-6 col-lg-4">
                                        <div className="card d-inline-imp mt-md-3 ml-md-5 bg-black">
                                           <div className="float-left">
                                               <figure className="figure">
                                                  <img src={flag3} className="figure-img img-fluid rounded pl-4" alt="A generic square placeholder image with rounded corners in a figure."/>
                                                   <p className="pt-3 pl-3 d-inline">2</p>
                                                   <p className="pt-3 pl-3 d-inline">:</p>
                                                  <figcaption className="figure-caption">ROTHERHAM</figcaption>
                                                </figure>
                                           </div>
                                           <div className="float-left">
                                               <figure className="figure">
                                               <p className="position-absolute third-right-score-position">5</p> <img src={flag4} className="figure-img img-fluid rounded pl-5" alt="A generic square placeholder image with rounded corners in a figure."/>
                                                  <figcaption className="figure-caption  text-right">OXFORD UTD</figcaption>
                                                </figure>
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

export default MatchSchedule;
