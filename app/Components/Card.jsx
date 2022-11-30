import Image from "next/image";
import React from "react";
import img from "../../public/img/starwars.jpg";

const Card = () => {
  return (
    <div className="card px-5 space-y-4 ">
      <div className="img-card min-w-[150px] h-[225px] relative ">
        <Image
          src={img}
          alt="img"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          placeholder="blur"
        />
        <div className="rating absolute bg-dark-blue p-[2px] rounded-full -bottom-3 left-2">
          <p className="text-sm font-bold text-white p-1 border-2 border-yellow-300 rounded-full">
            79%
          </p>
        </div>
      </div>
      <div className="desc">
        <h5 className="title font-bold">The School for Good and Evil</h5>
        <p className="date text-gray-500">Okt 19, 2022</p>
      </div>
    </div>
  );
};

export default Card;
