import { assets } from "../assets/assets";
import { useState, useEffect } from "react";

const Hero = () => {
  // List of product images
  const productImages = [
    assets.hero_4,
    assets.hero_3,
    assets.hero_2,
    assets.hero_1,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [productImages.length]);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-600 bg-gray-100">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-20 px-8">
        {/* Increased padding and font sizes */}
        <div className="text-[#414141]">
          <div className="flex items-center gap-4">
            <p className="w-12 md:w-16 h-[3px] bg-[#414141]"></p>
            <p className="font-medium text-lg md:text-xl">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-4xl sm:py-4 lg:text-6xl leading-relaxed prata-regular">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-4">
            <p className="font-semibold text-lg md:text-xl">SHOP NOW</p>
            <p className="w-12 md:w-16 h-[3px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side - Image Carousel */}
      <div className="w-full sm:w-1/2 relative h-[400px] sm:h-[500px] overflow-hidden">
        {/* Increased height for better visibility */}
        <img
          src={productImages[currentImageIndex]}
          alt={`Product ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-100 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Hero;
