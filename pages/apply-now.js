import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const ApplyNow = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Apply Now" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Apply Now" 
                imgClass="item-bg-2" 
            /> 

            <div className="apply-area ptb-100">
                <div className="container">
                    <div className="apply-title">
                        <h3>Loan Application</h3>
                    </div>

                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="apply-form">
                                    <div className="form-group">
                                        <label>First Name*</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="form-group">
                                        <label>Email*</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="form-group">
                                        <label>Credit Score</label>
                                        <select className="form-select">
                                            <option value="1">Select Score</option>
                                            <option value="1">599 and below</option>
                                            <option value="2">600-649</option>
                                            <option value="3">650-679</option>
                                            <option value="4">680-699</option>
                                            <option value="5">700-719</option>
                                            <option value="6">720-739</option>
                                            <option value="7">740 and above</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>How Much Funding Do You Need?</label>
                                        <input type="text" className="form-control" required />
                                        
                                    </div>

                                    <div className="form-group">
                                        <label>When Do You Need The Loan?</label>
                                        <select className="form-select">
                                            <option value="1">Now</option>
                                            <option value="1">1-3 weeks</option>
                                            <option value="2">1-3 months</option>
                                            <option value="3">more than 3 months</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>DBA (Business Name)</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="form-group">
                                        <label>Industry</label>
                                        <select className="form-select">
                                            <option value="1">Industry</option>
                                            <option value="1">Automotive</option>
                                            <option value="2">Food & Hospitality/Restaurant</option>
                                            <option value="3">Natural Resources/Entertainment</option>
                                            <option value="1">Business & Information Services</option>
                                            <option value="1">Construction/Utilities/Contracting</option>
                                            <option value="2">Personal Services</option>
                                            <option value="3">Education</option>
                                            <option value="1">Real Estate & Housing</option>
                                            <option value="1">Entertainment</option>
                                            <option value="2">safety/Security & legal</option>
                                            <option value="3">Technology</option>
                                            <option value="2">Transportation</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Alternative Email</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="apply-form">
                                    <div className="form-group">
                                        <label>Last Name*</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone Number*</label>
                                        <input type="text" className="form-control" required />
                                    </div>

                                    <div className="form-group">
                                        <label>Where Are You Located?</label>
                                        <select className="form-select">
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Use of Funds*</label>
                                        <select className="form-select">
                                        <option value="AL">Payroll</option>
                                        <option value="AK">Inventory</option>
                                        <option value="AZ">Equipment</option>
                                        <option value="AR">Renovations</option>
                                        <option value="CA">Expansion</option>
                                        <option value="CA">Repairs</option>
                                        <option value="CA">Marketing</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>How Did You Hear About Us?</label>
                                        <select className="form-select">
                                        <option value="GG">Google</option>
                                        <option value="EM">Email</option>
                                        <option value="Rd">Radio</option>
                                        <option value="ML">Mail</option>
                                        <option value="VD">Video</option>
                                        <option value="DA">Display ads</option>
                                        <option value="FB">Facebook</option>
                                        <option value="LD">Linkedin</option>
                                        <option value="SM">Social Media / Other</option>
                                        <option value="R">Referral</option>
                                        <option value="O">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>When Did You Start Your Business</label>
                                        <input type="date" className="form-control" required />
                                    </div>

                                    <div className="form-group">
                                        <label>I Would Like To:</label>
                                        <select className="form-select">
                                        <option value="GG">speak with a sales representative</option>
                                        <option value="EM">Complete the full application</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Choose here</label>
                                        <select className="form-select">
                                            <option value="0">Collateralized Loan</option>
                                            <option value="1">Line of Credit</option>
                                            <option value="2">Term Loan</option>
                                            {/* <option value="3">House Loan</option>
                                            <option value="4">Personal Loan</option>
                                            <option value="5">Education Loan</option>
                                            <option value="6">Payday Loan</option> */}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="apply-btn">
                            <button type="submit" className="btn default-btn">
                                Apply now <span></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
      
            <Footer />
        </>
    )
}

export default ApplyNow;