import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark-blue px-5 py-24 flex flex-col gap-10 sm:flex-row justify-center">
      <div className="logo-footer flex flex-col gap-5">
        <div className="logo bg-clip-text text-transparent bg-gradient-to-r from-light-green to-light-blue">
          <Link href={"/"} className="flex gap-2 items-center">
            <h1 className="text-3xl font-bold tracking-widest ">TMDB</h1>
            <div className="h-4 w-16 rounded-3xl bg-gradient-to-r from-light-green to-light-blue" />
          </Link>
        </div>
        <button className="bg-white text-blue-800 w-28 px-5 py-2 font-semibold rounded-md cursor-pointer">
          Hi Name!
        </button>
      </div>
      <div className="text-footer cursor-pointer text-white basics">
        <h4 className="font-bold text-xl">THE BASICS</h4>
        <h5>About TMDB</h5>
        <h5>Contact Us</h5>
        <h5>Support Forums</h5>
        <h5>API</h5>
        <h5>System Status</h5>
      </div>
      <div className="text-footer cursor-pointer text-white involved">
        <h4 className="font-bold text-xl">GET INVOLVED</h4>
        <h5>Contribution Bible</h5>
        <h5>Add New Movie</h5>
        <h5>Add New TV Show</h5>
      </div>
      <div className="text-footer cursor-pointer text-white community">
        <h4 className="font-bold text-xl">COMMUNITY</h4>
        <h5>Guidlines</h5>
        <h5>Discussions</h5>
        <h5>Leaderbard</h5>
        <h5>Twitter</h5>
      </div>
      <div className="text-footer cursor-pointer text-white legal">
        <h4 className="font-bold text-xl">LEGAL</h4>
        <h5>Terms of Use</h5>
        <h5>API Term of Use</h5>
        <h5>Privacy Policy</h5>
      </div>
    </div>
  );
};

export default Footer;
