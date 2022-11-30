import Image from "next/image";
import React from "react";
import img from "../../public/img/starwars.jpg";

const LeaderBoad = () => {
  return (
    <div className="px-5 w-full">
      {/* title */}
      <div className="title-leaderboad flex gap-5">
        <h1 className="text-2xl font-semibold">Leaderboard</h1>
        <div className="point-edit">
          <div className="edit green flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-200 to-green-500" />
            All Time Edits
          </div>
          <div className="edit red flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-200 to-red-500" />
            Edit This Week
          </div>
        </div>
      </div>
      {/* data */}
      {[...Array(10)].map((x, i) => {
        return (
          <div
            className="account-leaderboad flex gap-5 pt-5 items-center"
            key={i}
          >
            <div className="img-leaderboad relative w-[56px] h-[56px] ">
              <Image
                src={img}
                placeholder="blur"
                objectFit="cover"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="data-leaderboad flex-1">
              <h1 className="font-semibold text-lg">Raphael Martimo</h1>
              <div className="alltime-data flex gap-3 items-center">
                <div className="gauge green w-full h-2 bg-gradient-to-r from-green-200 to-green-500 rounded-full" />
                <p className="text-sm font-medium">90,851</p>
              </div>
              <div className="thisweek-data flex gap-3 items-center">
                <div className="gauge red w-full h-2 bg-gradient-to-r from-red-200 to-red-500 rounded-full" />
                <p className="text-sm font-medium">90,851</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderBoad;
