import React from "react";
import Link from "next/link";

const RecentNews = () => {
  return (
    <div className="blog-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Recent news</span>
          <h2>Success story posts</h2>
          <p>
          Explore triumphs and resilience in our Success Story posts. Be inspired by real-life accounts of individuals and businesses overcoming challenges to achieve remarkable success. Find motivation for your own journey.{" "}
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-item">
              <div className="image">
                <Link href="#">
                  <a>
                    <img src="/images/blog/blog1.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <span>July 05, 2020</span>
                <h3>
                  <Link href="#">
                    <a>Financing loans available to small businesses</a>
                  </Link>
                </h3>
                <Link href="/about-us">
                  <a className="blog-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="blog-item">
              <div className="image">
                <Link href="#">
                  <a>
                    <img src="/images/blog/blog2.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <span>July 14, 2022</span>
                <h3>
                  <Link href="#">
                    <a>5 Ways you can prepare your business for success</a>
                  </Link>
                </h3>
                <Link href="/about-us">
                  <a className="blog-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="blog-item">
              <div className="image">
                <Link href="#">
                  <a>
                    <img src="/images/blog/blog3.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <span>April 03, 2021</span>
                <h3>
                  <Link href="#">
                    <a>Tips for saving money and better guide for investment</a>
                  </Link>
                </h3>
                <Link href="/about-us">
                  <a className="blog-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
