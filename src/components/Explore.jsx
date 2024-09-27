import React from "react";
import C01 from "../assets/astro_painter.png";
import { Button } from "./ui/button";
import { FilePenIcon } from "lucide-react";

const Explore = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col md:flex-row w-full max-w-4xl p-4">
          <div className="flex-1 text-center md:text-left p-4">
            <hr className="border-yellow-500 border-2" />
            <h1 className="lg:text-3xl text-sm font-bold mb-4 text-yellow-500 mt-5">
              <span className="text-white">Call for artists!</span>
              <br /> Applications are
              <br /> open for all <br />
              artists & creators
            </h1>
            <hr className="border-yellow-500 border-xs" />
            <Button className="font-bold text-yellow-500 hover:bg-yellow-500 hover:text-black border border-yellow-500 rounded-full w-[200px] mt-10">
              Contact Us
            </Button>{" "}
            <Button className="font-bold text-yellow-500 hover:bg-yellow-500 hover:text-black border border-yellow-500 rounded-full w-[200px] mt-4">
              <FilePenIcon></FilePenIcon> Aplication Form
            </Button>
          </div>
          <div className="flex-1 p-4">
            <img src={C01} alt="Call for artists" className="w-full h-auto " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
