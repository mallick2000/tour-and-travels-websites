import React from "react";
// import HomePage from "@/components/Section/HomePageSection";
// import HomePageSection from "@/components/Section/HomePageSection";
// import Banner from "@/components/Section/Banner";
// import Destination from "@/components/Section/Destination";
import CabBookingForm from "@/components/Section/CabBookingForm";
import RoundTrip from "@/components/Section/RoundTrip";

const HomePage = () => {
  return (
    <div className="">
      <CabBookingForm />
      <RoundTrip />

      {/* <HomePageSection />
        <Banner/> 
        <Destination/> */}
    </div>
  );
};

export default HomePage;
