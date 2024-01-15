import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
	nav: true,
	mouseDrag: false,
    touchDrag: false,
	dots: false,
	autoplay: true,
	smartSpeed:1500,
	autoplayHoverPause: true,
	navText: [
		"<i class='bx bx-chevron-left'></i>",
		"<i class='bx bx-chevron-right'></i>",
	],
	responsive:{
		0:{
			items:1,
		},
		576:{
			items:1,
		},
		768:{
			items:1,
		},
		992:{
			items:2,
		}
	}
};

const Feedback = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="clients-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Clients words</span>
                    <h2>What our clients say</h2>
                    <p>We offer seamless funding for all size businesses that our clients love.</p>
                </div>
             
                {display ? <OwlCarousel 
                    className="feedback-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="clients-item">
                        <div className="info">
                            <img src="/images/clients/client1.png" alt="image" />
                            <h4>Markus Twain</h4>
                            <span>CEO</span>
                        </div>
                        <p>"Securing funding for our startup was a game-changer. Thanks to Snap Credit Solutions's support, we've grown beyond expectations. Their strategic investment and guidance propelled us to success in the market."</p>
                        <div className="icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                    </div>
                    
                    <div className="clients-item">
                        <div className="info">
                            <img src="/images/clients/client2.png" alt="image" />
                            <h4>Jessica Molony</h4>
                            <span>CEO</span>
                        </div>
                        <p>Working with Snap Credit Solutions was seamless and rewarding. Their transparent funding process allowed us to access capital quickly. Personalized advice from their experts was instrumental. We are well-positioned for sustained growth, grateful for the support."</p>
                        <div className="icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                    </div>

                    <div className="clients-item">
                        <div className="info">
                            <img src="/images/clients/client3.png" alt="image" />
                            <h4>Harry Nelis</h4>
                            <span>CEO</span>
                        </div>
                        <p>"Securing funding for our business was daunting until Snap Credit Solutions. Their commitment to innovation and supporting enterprises is commendable. The application process was straightforward. With their backing, we're on track to reach new heights."</p>
                        <div className="icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                    </div>

                    <div className="clients-item">
                        <div className="info">
                            <img src="/images/clients/client4.png" alt="image" />
                            <h4>James Vernall</h4>
                            <span>CEO</span>
                        </div>
                        <p>"Thankful for the financial partnership with Snap Credit Solutions. Flexible funding and competitive terms helped us weather challenges. The collaborative approach of their team made the funding experience personally rewarding. True partners in our business journey."</p>
                        <div className="icon">
                            <i className="flaticon-right-quote"></i>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Feedback;