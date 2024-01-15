import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a><img src="/images/logo-white.png" alt="image" /></a>
                                    </Link>
                                </div>

                                <p>It has never been easier to get funded for your small business, and you won’t ever need to look anywhere else again.</p>

                                {/* <ul className="social">
                                    <li><b>Follow us:</b></li>
                                    <li>
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
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about-us">
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/funding">
                                            <a>Funding Programs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sign-in">
                                            <a>Portal</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>    
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Other Resources</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/contact">
                                            <a>Support</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-conditions">
                                            <a>Terms of Service</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/affiliates">
                                            <a>Affiliates</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/apply-now">
                                            <a>Apply Now</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>    
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>

                                <div className="info-contact">
                                    <i className="flaticon-pin"></i>
                                    <span className='span-address'>90 Broad St, New York,<br></br> NY 10004</span>
                                </div>

                                <div className="info-contact">
                                <i className="flaticon-mail"></i>
                                    <span>
                                        <a href="mailto:sales@snapcreditsolutions.com">sales@snapcreditsolutions.com</a>
                                    </span>
                                    {/* <span>
                                        <a href="#">Skype: example</a>
                                    </span> */}
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
         
            <div className="copy-right-area">
                <div className="container">
                    <div className="copy-right-content">
                        <p>
                            Copyright &copy; {currentYear} Snap Credit Solutions. All Rights Reserved. <br></br> Powered By <a href="https://ngitnyinc.com" target="_blank">NGIT NY INC</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;