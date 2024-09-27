import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

import C01 from "../assets/slider1.jpg";
import C02 from "../assets/slider2.jpg";
import C03 from "../assets/slider3.jpg";
import C04 from "../assets/slider4.jpg";
import C05 from "../assets/slider5.jpg";
import C06 from "../assets/slider7.jpg";
import C07 from "../assets/slider8.jpg";
import C08 from "../assets/slider9.jpg";
import C09 from "../assets/slider10.jpg";
import C010 from "../assets/slider11.jpg";
import C011 from "../assets/slider12.jpg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { Button } from "./ui/button";
import Explore from "./Explore";

const Slide = ({ onExplore }) => {
  const slides = [
    { img: C01, title: "La Junta #100" },
    { img: C02, title: "RaBbit Riders" },
    { img: C03, title: "The RaBbit" },
    { img: C04, title: "The RaBbitNFT" },
    { img: C05, title: "The RaBbitNFT series" },
    { img: C06, title: "Lost RaBbits #100" },
    { img: C07, title: "Lost RaBbits #200" },
    { img: C08, title: "Lost RaBbits #300" },
    { img: C09, title: "The RaBbitNFT series" },
    { img: C010, title: "The DogNFT #100" },
    { img: C011, title: "The RaBbitNFT #200" },
  ];

  const [currentTitle, setCurrentTitle] = useState(slides[0].title);
  const [isFirstContentVisible, setIsFirstContentVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleExploreClick = () => {
    setIsFirstContentVisible(false);
    if (onExplore) onExplore();
  };

  useEffect(() => {
    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop < lastScrollTop) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative bg-cover bg-center">
      {isFirstContentVisible || scrollDirection === "up" ? (
        <>
          <div className="flex items-center justify-center">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: -75,
                depth: 250,
                modifier: 3.5,
                slideShadows: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              onSlideChange={(swiper) =>
                setCurrentTitle(slides[swiper.realIndex].title)
              }
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="w-full max-w-[800px]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-[200px] h-full border border-yellow-500 p-2 mt-8">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-[200px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center w-5/6 mx-auto m-0">
            {/* Current Title */}
            <h2 className="text-yellow-500 text-lg mt-2 font-bold">
              {currentTitle}
            </h2>

            {/* Main Content Section */}
            <div className="text-white flex flex-col md:flex-row mt-4 space-y-6 md:space-y-0 md:space-x-8">
              {/* Left Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <hr className="hidden md:block border-yellow-500 border-2" />{" "}
                {/* Hidden on mobile */}
                <h2 className="text-2xl md:text-3xl font-extrabold my-4">
                  MoonBoxes.io
                  <br />
                  <span className="text-yellow-500">
                    your base to purchase NFT
                  </span>
                </h2>
                <hr className="hidden md:block border-yellow-500 border-xs" />{" "}
                {/* Hidden on mobile */}
              </div>

              {/* Right Section */}
              <div className="w-full md:w-1/2">
                <hr className="hidden md:block ml-0 md:ml-8 border-yellow-500 border-xs" />{" "}
                {/* Hidden on mobile */}
                <p className="text-center md:text-left lg:ml-6 lg:mt-4 ">
                  MoonBoxes.io
                  <span className="text-yellow-500">
                    {" "}
                    offers you a
                    <br />
                    complete overview of upcoming,
                    <br />
                    active and recent NFT drops.
                  </span>
                </p>
                <p className="text-center md:text-left lg:ml-6 lg:mt-4 mt-4">
                  MoonBoxes.io
                  <span className="text-yellow-500">
                    {" "}
                    will be home to
                    <br />
                    collectors and amazing NFT artists.
                  </span>
                </p>
                {/* Explore Button */}
                <div className="flex justify-center md:justify-start lg:ml-6 mt-5">
                  <Button
                    className="bg-yellow-500 rounded-full text-black font-bold hover:bg-yellow-600 w-1/3 md:w-auto px-4 py-2 text-sm"
                    onClick={handleExploreClick}
                  >
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Explore></Explore>
      )}
    </div>
  );
};
export default Slide;
