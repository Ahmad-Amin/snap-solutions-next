import React, { Component } from 'react'
import Link from 'next/link'

export default class ProfessionalServices extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
    render() {
        return (
            <div className="best-services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Industries <span>We</span> Serve</h2>
                        <p>Discover tailored solutions across diverse industries. From startups to established enterprises, we specialize in meeting the unique financial needs of
                             businesses, ensuring personalized support for every client's success.</p>
                    </div>

                    <div className="tab best-services-tab">
                        <ul className="tabs">
                            <li
                                // className="current"
                                // onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <i className="flaticon-agriculture"></i>
                                <span>Medical Practice loans</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <i className="flaticon-personal"></i>
                                <span>Restaurant Loans</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                <i className="flaticon-loan-1"></i>
                                <span>Construction Business loans</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab4')}
                            >
                                <i className="flaticon-scholarship"></i>
                                <span>Accounting Firm Loans</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab5')}
                            >
                                <i className="flaticon-loan-2"></i>
                                <span>Attorney Firm Loans</span>
                            </li>

                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab6')}
                            >
                                <i className="flaticon-loan-3"></i>
                                <span>Automotive Repair Shops Loans</span>
                            </li>
                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab7')}
                            >
                                <i className="flaticon-loan-3"></i>
                                <span>Cleaning services Loans</span>
                            </li>
                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab8')}
                            >
                                <i className="flaticon-loan-3"></i>
                                <span>Retail Store Loans</span>
                            </li>
                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab9')}
                            >
                                <i className="flaticon-loan-3"></i>
                                <span>Manufacturing Loans</span>
                            </li>
                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab10')}
                            >
                                <i className="flaticon-loan-3"></i>
                                <span>Staffing Service Loans</span>
                            </li>
                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab11')}
                            >
                                <i className="flaticon-loan-3"></i>
                                <span>Auto Dealer Loans</span>
                            </li>
                            <li
                                // onClick={(e) => this.openTabSection(e, 'tab12')}
                            >
                                <i className="flaticon-loan-3"></i>
                                <span>Beauty Salon Loans</span>
                            </li>
                            
                        </ul>

                        {/* <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Agricultural loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Agricultural loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Agricultural loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Personal loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Personal loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Personal loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Business loans</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Business loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Business loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab4" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Education loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Education loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Education loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="tab5" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>House loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for House loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>House loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab6" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Payday loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Payday loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Payday loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab7" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Business loans</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Business loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Business loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab8" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Business loans</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Business loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Business loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab9" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Business loans</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Business loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Business loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab10" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Business loans</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Business loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Business loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab11" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Business loans</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Business loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Business loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab12" className="tabs_item">
                                <div className="services-tabs-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="services-tab-image">
                                                <img src="/images/services-tab.png" alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="services-tab-content">
                                                <h3>Business loans</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Types of business loan</h3>
                                                <ul className="list">
                                                    <li>Secured loans</li>
                                                    <li>Unsecured loans</li>
                                                    <li>Revolving credit facilities</li>
                                                    <li>Business cash advances</li>
                                                </ul>
                                           
                                                <h3>Eligibility and criteria for Business loan</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                                <h3>Business loan guide</h3>
                                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                                <Link href="/services-details">
                                                    <a className="default-btn">Learn more <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
