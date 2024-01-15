import React from "react";
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/HomeTwo/MainBanner";
import PartnerStyleTwo from "../components/Common/PartnerStyleTwo";
import AboutCompany from "../components/HomeTwo/AboutCompany";
import WhyPeopleChooseUsTwo from "../components/Common/WhyPeopleChooseUsTwo";
import ApplyForLoanStyleTwo from "../components/Common/ApplyForLoanStyleTwo";
import CallUs from "../components/Common/CallUs";
import OurCompanyValues from "../components/HomeTwo/OurCompanyValues";
import ProfessionalServices from "../components/HomeTwo/ProfessionalServices";
import FeedbackStyleTwo from "../components/Common/FeedbackStyleTwo";
import TeamMember from "../components/Common/TeamMember";
import RecentNews from "../components/Common/RecentNews";
import Footer from "../components/_App/Footer";
import Feedback from "../components/Common/Feedback";

const Index2 = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <PartnerStyleTwo />

      <AboutCompany />

      <WhyPeopleChooseUsTwo />

      <ApplyForLoanStyleTwo />

      <CallUs />

      <OurCompanyValues />

      <ProfessionalServices />

      <Feedback></Feedback>

      {/* <FeedbackStyleTwo /> */}

      {/* <TeamMember /> */}

      <RecentNews />
      
{/* <!-- Start of HubSpot Embed Code --> */}
  <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/44666256.js"></script>
{/* <!-- End of HubSpot Embed Code --> */}

      <Footer />
    </>
    
  );
};

export default Index2;
