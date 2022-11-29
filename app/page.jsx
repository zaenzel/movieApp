import Link from "next/link";
import Card from "./Components/Card";
import Hero from "./film/Components/Hero";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import bg from "../public/img/bnh.jpg";
import Cardtrailer from "./Components/Cardtrailer";
import LeaderBoad from "./Components/LeaderBoad";

const page = () => {
  return (
    <>
      <Hero />
      {/* list populer */}
      <div className="container-list-movie py-8">
        <div className="px-10 flex items-center">
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
        <div className="container-card flex overflow-x-auto px-5 py-5">
          {[...Array(15)].map((x, i) => {
            return <Card key={i} />;
          })}
        </div>
      </div>
      {/* list free to watch */}
      <div className="container-list-movie pt-8">
        <div className="px-10 flex items-center">
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
        <div className="container-card flex overflow-x-auto px-5 pt-5 pb-10">
          {[...Array(15)].map((x, i) => {
            return <Card key={i} />;
          })}
        </div>
      </div>
      {/* list video trailer */}
      <div className="container-triler-movie relative">
        <Image
          src={bg}
          alt="picture"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
        <div className="py-5 px-10 flex items-center ">
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
        <div className="container-card flex overflow-x-auto px-5">
          {[...Array(15)].map((x, i) => {
            return <Cardtrailer key={i} />;
          })}
        </div>
      </div>
      {/* list trending */}
      <div className="container-list-movie py-8 bg-[url('/img/bg.png')]">
        <div className="px-10 flex items-center">
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
        <div className="container-card flex overflow-x-auto px-5 py-5">
          {[...Array(15)].map((x, i) => {
            return <Card key={i} />;
          })}
        </div>
      </div>
      <div className="container-leaderboad">
        <LeaderBoad />
      </div>
    </>
  );
};

export default page;
