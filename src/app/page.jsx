import React from "react";

import Homepage from "@/components/Section/Homepage";
// import HomePage from "@/components/Section/HomePageSection";
// import HomePageSection from "@/components/Section/HomePageSection";
// import Banner from "@/components/Section/Banner";
// import Destination from "@/components/Section/Destination";
import CabBookingForm from "@/components/Section/CabBookingForm";
import Testimonials from "@/components/Section/Testimonials";

const Page = () => {
  return (
    <>
      <div className="bg-blue-100/50 font-serif">
        <CabBookingForm />

        {/* <HomePageSection />
        <Banner/> 
        <Destination/> */}
      </div>
      <div className="bg-blue-100/50 font-serif">
        <Homepage />
        <Testimonials />
      </div>
    </>
  );
};

export default Page;
