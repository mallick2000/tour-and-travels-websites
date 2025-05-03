import React from "react";

import Homepage from "@/components/Section/Homepage";

// import HomePage from "@/components/Section/HomePageSection";
// import HomePageSection from "@/components/Section/HomePageSection";
// import Banner from "@/components/Section/Banner";
// import Destination from "@/components/Section/Destination";
import CabBookingForm from "@/components/Section/CabBookingForm";


const Page = () => {
  return (

    <div className="bg-blue-100/50">
      <Homepage />

    <div className="">
      <CabBookingForm />

      {/* <HomePageSection />
        <Banner/> 
        <Destination/> */}

    </div>  
</div>
  );
};

export default Page;
