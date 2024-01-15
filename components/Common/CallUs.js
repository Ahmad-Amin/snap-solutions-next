import React from 'react';

const CallUs = () => {
    return (
        <div className="solution-area">
            <div className="container">
                <div className="solution-item">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="content">
                                <h3 className=''>We are here to help your business, Email us to discuss your Solution</h3>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="solution-info">
                                {/* <i className="flaticon-telephone"></i> */}
                                <i className="flaticon-mail"></i>
                                <h3>
                                    <a className='callUsOne'  href="mailto:sales@snapcreditsolutions.com">sales@snapcreditsolutions.com</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallUs;