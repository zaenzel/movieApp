import Link from "next/link";
import Card from "./Components/Card";
import Hero from "./film/Components/Hero";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import bg from "../public/img/bnh.jpg";
import Cardtrailer from "./Components/Cardtrailer";

const page = () => {
  return (
    <>
      <Hero />
      <div className="container-list-movie ">
        <div className="p-5 flex items-center ">
          <h1 className="text-xl mr-3 sm:text-2xl font-semibold">
            What's Populer
          </h1>
          <button className="px-3 text-sm bg-dark-blue rounded-2xl flex items-center sm:text-base font-bold">
            <span className="flex items-center bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]">
              Streaming{" "}
              <RiArrowDropDownLine className="text-3xl text-light-blue" />
            </span>
          </button>
        </div>
        <div className="container-card flex overflow-x-auto">
          {[...Array(5)].map((x, i) => {
            return <Card key={i} />;
          })}
        </div>
      </div>
      <div className="container-list-movie ">
        <div className="p-5 flex items-center ">
          <h1 className="text-xl mr-3 sm:text-2xl font-semibold">
            Free to watch
          </h1>
          <button className="px-3 text-sm bg-dark-blue rounded-2xl flex items-center sm:text-base font-bold">
            <span className="flex items-center bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]">
              Movies
              <RiArrowDropDownLine className="text-3xl text-light-blue" />
            </span>
          </button>
        </div>
        <div className="container-card flex overflow-x-scroll">
          {[...Array(50)].map((x, i) => {
            return <Card key={i} />;
          })}
        </div>
      </div>
      <div className="container-triler-movie relative">
        <Image
          src={bg}
          alt="picture"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="p-5 flex items-center ">
          <h1 className="text-xl mr-3 sm:text-2xl font-semibold text-white">
            Free to watch
          </h1>
          <button className="px-3 text-sm bg-dark-blue rounded-2xl flex items-center sm:text-base font-bold">
            <span className="flex items-center bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]">
              Movies
              <RiArrowDropDownLine className="text-3xl text-light-blue" />
            </span>
          </button>
        </div>
        <div className="container-card flex overflow-x-auto">
          {[...Array(5)].map((x, i) => {
            return <Cardtrailer key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default page;
