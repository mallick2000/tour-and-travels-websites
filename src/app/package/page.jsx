import CabTravelBanner from "@/components/pages/TravelPackage/BannerSection";
import KonarkSlider from "@/components/pages/TravelPackage/TopPlace";
import TrendingDestinations from "@/components/pages/TravelPackage/TopVisit";
import Gallery from "@/components/pages/TravelPackage/TravelGallery";
import React from "react";

const page = () => {
  return (
    <div>
      <CabTravelBanner />
      {/* <TopDestinations /> */}
      <TrendingDestinations />
      {/* <KonarkSlider /> */}
      {/* <Packages /> */}
      <Gallery />
    </div>
  );
};

export default page;
