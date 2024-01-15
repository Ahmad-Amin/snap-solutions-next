import React from "react";
import Link from "next/link";

const ApplyForLoanStyleTwo = () => {
  return (
    <div className="deserve-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Business <span>Funding</span> is what we do!</h2>

          <p>
          Business funding is what we do! Simplify your financial needs with our dedicated support. Whether you're looking to expand, innovate, or manage cash flow, we've got you covered.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="deserve-item">
              <h3>We usually follow 4 steps to get a better business funding.</h3>

              <div className="deserve-content">
                <span>1</span>
                <h4>Apply in 10 minutes</h4>
                <p>
                Get a loan in 10 minutes! Quick and easy application process.
                 Fill out a short form, and access funds fast. Hassle-free, so you can focus on what matters most.
                </p>
              </div>

              <div className="deserve-content">
                <span>2</span>
                <h4>Hear from us in 1 hour</h4>
                <p>
                Apply quickly, and expect a fast turnaround. We value your time and aim 
                to provide you with a prompt decision so you can move forward with your plans without delay.
                </p>
              </div>

              <div className="deserve-content">
                <span>3</span>
                <h4>A decision in 24 hours</h4>
                <p>
                We understand the importance of your time and aim to provide you with a decision
                 within 24 hours, allowing you to plan your next steps with certainty.
                </p>
              </div>

              <div className="deserve-content">
                <span>4</span>
                <h4>Your business is funded</h4>
                <p>
                Once your application is approved, expect prompt disbursement of funds.
                 Experience the ease of securing financial support with our efficient lending process.
                </p>
              </div>

              <div className="deserve-btn">
                <Link href="/apply-now">
                  <a className="default-btn">
                    Apply now <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="rate-form bg-2998d4">
              <div className="rate-content">
                <span>Calculate your rate</span>
                <h3>How much do you need?</h3>
              </div>

              <form className="form">
                <div className="form-group">
                  <label>How Much Do You Need</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="$10000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>When Do You Need The Loan</label>

                  <select className="form-select">
                    <option value="5">Now</option>
                    <option value="1">1-3 weeks</option>
                    <option value="2">1-3 months</option>
                    <option value="0">more than 3 months</option>
                    {/* <option value="3">6 month</option>
                    <option value="3">1 Year</option>
                    <option value="0">2 Years</option>
                    <option value="3">3 Years</option> */}
                  </select>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Credit Score</label>
                  <select className="form-select">
                    <option value="5">599 and below</option>
                    <option value="1">650-679</option>
                    <option value="2">680-699</option>
                    <option value="0">700-719</option>
                    <option value="0">720-739</option>
                    <option value="0">740 and above</option>
                    {/* <option value="3">6 month</option>
                    <option value="3">1 Year</option>
                    <option value="0">2 Years</option>
                    <option value="3">3 Years</option> */}
                  </select>
                </div>

                <div className="form-group">
                  <label>DBA (Business Name)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="business name"
                    required
                  />
                </div>

                <div className="rate-btn">
                  <button type="submit" className="btn default-btn">
                    Apply for this loan <span></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForLoanStyleTwo;
