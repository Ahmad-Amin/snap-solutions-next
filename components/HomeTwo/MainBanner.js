import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner-area bg-two">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="main-banner-content">
                            <span>Approved and funded the same day</span>
                            <h1>Business funding is what we do</h1>
                            <p>Our all-in-one working capital funding platform and team of professionals.</p>
                            
                            <div className="banner-btn">
                                <Link href="/services">
                                    <a className="default-btn">
                                        Apply Now <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="banner-social-buttons">
                            <ul>
                                {/* <li>
                                    <span>Contact Us</span>
                                </li>
                                <li>
                                    <h6>gg</h6>
                                </li> */}
                                {/* <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i className="flaticon-linkedin"></i>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;