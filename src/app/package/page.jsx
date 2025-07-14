import TopDestinations from "@/components/pages/HomePage/AttractionHome";
import Packages from "@/components/pages/HomePage/Package";
import CabTravelBanner from "@/components/pages/TravelPackage/BannerSection";
import React from "react";

const page = () => {
  return (
    <div>
      <CabTravelBanner />
      <TopDestinations />
      <Packages />
    </div>
  );
};

export default page;
