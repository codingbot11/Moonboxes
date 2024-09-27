import React, { useState, useEffect, useRef } from "react";
import myImage from "../assets/black.jpg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/Separator";
import rocketImage from "../assets/slide1.jpg";
import cartoonImage from "../assets/slide2.jpg";
import cartoonImage1 from "../assets/slide3.jpg";
import cartoonImage2 from "../assets/slide4.jpg";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  ArrowDown,
  Clock3Icon,
  DropletsIcon,
  FolderClosed,
  Earth,
  Info,
  ArrowLeftCircle,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import Slide from "./Slide";

const Home = () => {
  const [isFirstContentVisible, setIsFirstContentVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [rocketImage, cartoonImage, cartoonImage1, cartoonImage2];
  const swiperRef = useRef(null);

  const handleScroll = (e) => {
    if (e.deltaY < 0 && !isFirstContentVisible) {
      setIsFirstContentVisible(true);
    } else if (e.deltaY > 0 && isFirstContentVisible) {
      setIsFirstContentVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isFirstContentVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollDown = () => {
    setIsFirstContentVisible(false);
    if (swiperRef.current) {
      swiperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <TooltipProvider>
      <div className="relative items-center justify-center min-h-screen bg-yellow-500 flex flex-col">
        <h1 className="absolute top-5 left-5 text-xl md:text-2xl font-bold z-20">
          <span className="text-white">MOON</span>BOXES
        </h1>

        <div className="absolute top-[65px] space-x-3 z-20 hidden md:flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <ArrowLeftCircle className="hover:text-white cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-gray-800 text-white p-2 rounded-md shadow-lg"
            >
              <span>Back</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <DropletsIcon className="hover:text-white cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-gray-800 text-white p-2 rounded-md shadow-lg"
            >
              <span>Recently, live and upcoming NFT drops.</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <FolderClosed className="hover:text-white cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-gray-800 text-white p-2 rounded-md shadow-lg"
            >
              <span>
                Your wallet inventory. Overview of all NFTs you received from
                MoonBoxes.
              </span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Clock3Icon className="hover:text-white cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-gray-800 text-white p-2 rounded-md shadow-lg"
            >
              <span>Your history. Overview of your MoonBoxes NFT claims.</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="hover:text-white cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-gray-800 text-white p-2 rounded-md shadow-lg"
            >
              <span>Information</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Earth className="hover:text-white cursor-pointer" />
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-yellow-500 text-black p-2 rounded-full border-none font shadow-lg"
            >
              <span className="font-bold">Explore</span>
            </TooltipContent>
          </Tooltip>
        </div>

        <img
          src={myImage}
          alt="Background"
          className="mx-auto img fixed top-[55px] w-[89%] h-[90vh] object-cover z-0"
        />

        <div className="relative z-20 flex flex-col items-center justify-center w-5/6 mx-auto m-0">
          {isFirstContentVisible ? (
            <div className="flex flex-col md:flex-row max-w-2xl text-white text-center md:text-left">
              <div className="flex-1">
                <Separator className="mb-3 bg-yellow-500" />
                <h1 className="md:text-3xl text-sm font-bold mb-4">
                  <span>Buy MoonBoxes</span>
                  <br />
                  <span className="text-yellow-500">and expand your</span>
                  <br />
                  <span className="text-yellow-500">NFT collection</span>
                </h1>
                <Separator className="bg-yellow-500 mb-3" />
                <p className="text-xs sm:text-sm md:text-xl lg:text-sm">
                  <span className="text-yellow-500">
                    Buying MoonBoxes is a unique way to acquire NFTs and build
                    your collection. It is built on the Binance Smart Chain,
                    MoonRiver, Polygon, Ethereum, and DogeChain. Only available
                    on
                  </span>
                  <span className="hover:text-gray-300"> MoonBoxes.io </span>
                </p>
                <div className="flex flex-col md:flex-row items-center mt-6">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full">
                    Buy A Moonbox
                  </Button>
                  {isFirstContentVisible && (
                    <ArrowDown
                      onClick={scrollDown}
                      className="mt-8 text-yellow-500 font-bold text-2xl border rounded-full hover:text-yellow-600 border-yellow-500 hover:border-yellow-600 p-1 w-10 h-10 m-5 cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center md:ml-8 mt-4 md:mt-0">
                <img
                  src={images[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  className="w-[250px] h-[210px] md:w-[350px] md:h-[310px] rounded-3xl"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center max-w-md"></div>
          )}

          {!isFirstContentVisible && (
            <div ref={swiperRef} className="flex-1 max-w-4xl mt-4">
              <Slide />
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-24 hidden lg:flex">
          <Button className="border-t border-l-2 border-yellow-600 text-yellow-600 font-bold lg:text-xs lg:w-36 mb-2">
            TIER
          </Button>
          <Button className="bg-yellow-500 text-black font-bold lg:text-xs">
            MOONSHOT BALANCE
          </Button>
          <Button className="border-t border-r-2 border-yellow-600 bg-black text-yellow-600 font-bold pbutton lg:text-xs">
            TOTAL NFTS
          </Button>
        </div>
      </div>
    </TooltipProvider>
    </>
  );
};

export default Home;
