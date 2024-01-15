import React from "react";
import Link from "next/link";
import Counter from "../Counter";

const AboutCompany = () => {
  return (
    <div className="about-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-wrap">
              <img src="/images/about/about3.png" alt="image" />

              <div className="about-shape">
                <div className="text">
                  <div className="sexy">
                    
                    <Counter end={12} />
                  </div>
                  <span>Years Of Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <span>About Snap Credit Solutions</span>
              <h3>
                We have been working very efficiently with loan and funding for
                12 years.
              </h3>
              <p>
                Snap Credit Solutions, launched in 2012, aims to simplify the working capital
                acquisition process for small businesses. By prioritizing a
                user-friendly approach and utilizing technology, they have
                achieved a funding approval rate of over 90%, providing a
                solution to the challenges faced when seeking capital through
                traditional methods.
              </p>
              <strong>In business, we focus on 3 things.</strong>

              <ul className="about-list">
                <li>
                  <i className="flaticon-check"></i>
                  Easy Sign Up
                </li>
                <li>
                  <i className="flaticon-check"></i>
                  Same-Day Decision
                </li>
                <li>
                  <i className="flaticon-check"></i>
                  Fast Funding
                </li>
              </ul>

              <div className="about-btn">
                <Link href="/about-us">
                  <a className="default-btn">
                    View more <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
