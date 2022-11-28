import Image from "next/image";
import React from "react";
import bgImg from "../../../public/img/starwars2.png";

const Hero = () => {
  return (
    <div className="Hero relative">
      <Image
        src={bgImg}
        alt="picture"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="hero-wrapper p-5 sm:p-10 space-y-5 text-white">
        <div className="text-hero space-y-3">
          <h1 className="text-4xl font-bold sm:text-5xl">Welcome.</h1>
          <h2 className="text-3xl font-medium sm:text-4xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
        <div className="search-movie relative ">
          <input
            type="text"
            placeholder="Search..."
            className="text-black w-full py-3 px-5 rounded-3xl outline-none"
          />
          <button className="bg-gradient-to-r from-[#90cea1] to-[#01b4e4] text-white font-semibold p-3 px-5 rounded-3xl absolute right-0 top-0 hover:opacity-80">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
