import Testimonials from "@/components/pages/HomePage/Testimonials";
import CabTravelBanner from "@/components/pages/TravelPackage/BannerSection";
import TourPackages from "@/components/pages/TravelPackage/TopPlace";

import TrendingDestinations from "@/components/pages/TravelPackage/TopVisit";
import Gallery from "@/components/pages/TravelPackage/TravelGallery";
import Testimonial from "@/components/pages/TravelPackage/TravelTestimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <CabTravelBanner />

      <TrendingDestinations />
      <TourPackages />

      <Gallery />
      <Testimonials />
    </div>
  );
};

export default page;
