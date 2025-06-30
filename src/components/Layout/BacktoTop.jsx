"use client";

import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip"; // adjust path if needed

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white text-xl shadow-md hover:bg-blue-700 transition-all"
            aria-label="Back to Top"
          >
            <ArrowUp />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Back to top</p>
        </TooltipContent>
      </Tooltip>
    )
  );
};

export default BackToTopButton;
