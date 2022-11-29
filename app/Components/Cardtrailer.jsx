import Image from "next/image";
import React from "react";
import img from "../../public/img/starwars.jpg";
import { FaPlay } from "react-icons/fa";

const Cardtrailer = () => {
  return (
    <div className="card px-5 pt-2 pb-6">
      <div className="video-card-trailer w-[300px] h-[168px] relative cursor-pointer hover:scale-105 transition-all duration-300 ease-out">
        {/* <iframe
          src="https://www.youtube.com/embed/Xp-fZcMOsdw"
          frameBorder={0}
          allowFullScreen
        ></iframe> */}
        <Image
          src={img}
          alt="img"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="play-button absolute top-[70px] left-[140px]">
          <FaPlay className="text-4xl text-white" />
        </div>
      </div>
      <div className="desc text-white text-center">
        <h5 className="title font-bold ">The School for Good and Evil</h5>
        <p className="">Okt 19, 2022</p>
      </div>
    </div>
  );
};

export default Cardtrailer;
