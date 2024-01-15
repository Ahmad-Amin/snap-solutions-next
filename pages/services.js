import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CallUs from '../components/Common/CallUs';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Services = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                imgClass="item-bg-5" 
            /> 

            <div className="services-area bg-color ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Knowledge of the market</span>
                        <h2>Only the best professional services</h2>
                        <p>If Snap's direct programs aren’t the best fit for you, our Marketplace gotcha covered! Snap Credit Solutions has created its own unique Marketplace, with over a decade of vetted partnerships. </p>
                    </div>

                    <div className="row">
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-agriculture"></i>
                                </div>
                                <h3>Merchant Cash Advance</h3>
                                <p>A merchant cash advance allows you to borrow against future earnings to access that capital today.</p>
                                <Link href="/contact">
                                <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-loan-1"></i>
                                </div>
                                <h3>Lines of Credit</h3>
                                <p>Like a credit card for your business. You can take money out of the LOC until your limit is reached.</p>
                                <Link href="/contact">
                                <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-loan-2"></i>
                                </div>
                                <h3>Traditional Bank Loans</h3>
                                <p>Usuallv lower interest rates but also takes much longer to get approved. Collateral and a high credit score are needed.</p>
                                <Link href="/contact">
                                <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-personal"></i>
                                </div>
                                <h3>401K Business Financing</h3>
                                <p>Allows vou to use your 401 (k) funds to finance your business without incurring hefty taxes.</p>
                                <Link href="/contact">
                                <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-scholarship"></i>
                                </div>
                                <h3>Disaster Relief Loan</h3>
                                <p>An SBA loan that provides assistance for the repair and rebuilding of non-farm, private sector losses for businesses that have sustained economic injury.</p>
                                <Link href="/contact">
                                <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-loan-3"></i>
                                </div>
                                <h3>Hard Money Business Loans</h3>
                                <p>A loan based solely on the property used as collateral. Credit score is not checked.</p>
                                <Link href="/contact">
                                <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>
 
                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-car"></i>
                                </div>
                                <h3>SBA</h3>
                                <p>Requires an unconditional guarantee as business collateral. They take into account vour time in business, annual revenue and your credit score.</p>
                                <Link href="/contact">
                                <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-loan-4"></i>
                                </div>
                                <h3>Collateralized Loans</h3>
                                <p>Borrowed money with assets as security, repaid in installments for business needs. </p>
                                <Link href="/contact">
                                <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-item">
                                <div className="icon">
                                    <i className="flaticon-rocket"></i>
                                </div>
                                <h3>Term Loans</h3>
                                <p>Borrowed money repaid in regular payments over an agreed period for business needs like expansion or asset purchase.</p>
                                <Link href="/contact">
                                <a className="learn-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>

                        {/* Pagination */}
                        {/* <div className="col-lg-12">
                            <ul className="pagination-list">
                                <li>
                                    <Link href="#">
                                        <a>
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="active">1</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>2</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>3</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
      
            <CallUs />
            
            <Footer />
        </>
    )
}

export default Services;