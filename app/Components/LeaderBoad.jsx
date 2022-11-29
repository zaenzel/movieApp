import React from "react";

const LeaderBoad = () => {
  return (
    <div className="">
      <div className="title-leaderboad flex gap-5 ">
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
    </div>
  );
};

export default LeaderBoad;
