import React, { Component } from "react";
import logo from "../images/cer-logo.png";
import footer from "../images/footer.png";

const Footer = () => {
  return (
    <>
      <footer className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 bg-dark">
          <div className="container footer-sizing px-0">
            <img src={logo} alt="logo" className=" logo-sm " />
            <p className="pl-3 mt-2">1145 Forrest St.</p>
            <p className="pl-3">Suite 200 Conshohocken, PA 19428</p>
            <p className="pl-3 py-1">
              <span className="contact">+01 1245 67890</span>
            </p>
            <p className="pl-3">cerberusfootballfantasy@example.com</p>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 px-0">
          <div className="card  text-center">
            <img className="card-img" src={footer} alt="Card image" />
            <div className="card-img-overlay img-overlay-dark">
              <div className="row">
                <div className="col-6">
                  <div className="card-header font-xs text-white">
                    API Solutions
                  </div>
                  <ul className="list-group ">
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        Sports Data
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        NFL API
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        MLB API
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        NBA API
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        NHL API
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        NCAA Football API
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        NCAA Basketball API
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        PGA Golf API
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <div className="card-header font-xs text-white">
                    QUICK LINKS
                  </div>
                  <ul className="list-group ">
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        Privacy
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        Do Not Sell
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        Terms
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        Blog
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        Contact
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        Help
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        Register
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent footer-list">
                      <a href="" className="color-gray">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <p className="text-center color-gray">
                    <i className="far fa-copyright"></i> Copyright 2020 Cerberus
                    Football Fantasy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
