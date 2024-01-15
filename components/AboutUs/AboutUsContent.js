import React from 'react';

const AboutUsContent = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="p-relative">
                            <div className="about-image">
                                <img src="/images/about/about1.jpg" alt="image" />
                                <img src="/images/about/about2.jpg" alt="image" />
                            </div>

                            <div className="experience">
                                <h4 className='h44'>12</h4>
                                <p>We have more than years of experience</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="about-content">
                            <span>About Snap Credit Solutions</span>
                            <h3>A Little About Us</h3>
                            <p>Snap Credit Solutions was launched in 2012 with a mission to make receiving capital for small businesses possible. We had one strategy in mind – to make receiving working capital simple, intuitive and human. The challenge of meeting the daily demands of your business and making your business stand out in a competitive marketplace requires money. Getting approved for a loan through a bank or other types of payday companies can be a daunting task. Snap Credit Solutions has found a way to work around these challenges. Our funding approval process is centered around our customers, using the power of technology. Over 90% of our customers  are approved for funding, using our simple, user-friendly application process.</p>
                            <strong>In business, we focus on 3 things.</strong>

                            <ul className="about-list">
                                <li>
                                    <i className="flaticon-check"></i>
                                    Trusted
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Reliability
                                </li>
                                <li>
                                    <i className="flaticon-check"></i>
                                    Innovation
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent;