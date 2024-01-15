import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
};

const FeedbackStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="clients-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Clients words</span>
                    <h2>What our clients say</h2>
                    <p>Explore seamless processes, personalized solutions, and swift services. Trust us for your financial needs and read what clients say about their success. </p>
                </div>

                {display ? <OwlCarousel 
                    className="clients-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="clients-item">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="clients-info-text">
                                    <p className='clients'>"[Your Company Name] has been a game-changer for our business! The process of securing funding was not only quick but also tailored to our unique needs. 
                                        The team's dedication to understanding our goals and financial landscape made all the difference. Thanks to their fast and flexible funding solutions, we've been able to expand and thrive in a competitive market. Highly recommended!"</p>


                                    <h3>Debra C. Cowen</h3>
                                    <span>Founder</span>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="clients-image">
                                    <img src="/images/clients/man1.png" alt="image" />
                                    <div className="icon-1">
                                        <i className="flaticon-right-quote"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clients-item">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="clients-info-text">
                                    <p className='clients'>"[Your Company Name] exceeded our expectations in every way. Their commitment to providing same-day decisions and fast funding made the entire experience seamless.
                                         The personalized approach, combined with their understanding of our industry, showcased their expertise. Thanks to [Your Company Name], we were able to seize opportunities and propel our business forward. Truly grateful for their efficient and reliable service!"</p>
                                    <h3>George J. Specter</h3>
                                    <span>Founder</span>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="clients-image">
                                    <img src="/images/clients/man1.png" alt="image" />
                                    <div className="icon-1">
                                        <i className="flaticon-right-quote"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clients-item">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="clients-info-text">
                                    <p className='clients'>"[Your Company Name] understands that business doesn't wait, and neither do they. Despite our less-than-perfect credit, they offered us a fast and straightforward funding solution that aligned perfectly with our needs.
                                         The ease of the application process and the speed at which we received the funds were impressive. [Your Company Name] has become our go-to partner for business funding, and we can't recommend them enough for their professionalism and efficiency."</p>
                                    <h3>Lisa A. Jackson</h3>
                                    <span>Founder</span>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="clients-image">
                                    <img src="/images/clients/man1.png" alt="image" />
                                    <div className="icon-1">
                                        <i className="flaticon-right-quote"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default FeedbackStyleTwo;