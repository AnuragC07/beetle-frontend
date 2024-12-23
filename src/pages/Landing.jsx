import React from "react";
import Logo from "../assets/beetle2.svg";
import illustration from "../assets/Designer__7_-removebg.png";
import { Link } from "react-router-dom";
import grid from "./../assets/Vectorgf.png";
import hero from "./../assets/Redefine perspectives.png";
import buttonimg from "./../assets/Group 15.png";
const Landing = () => {
  return (
    <div className="bg-stone-900">
      <nav className="flex justify-center items-center py-14">
        <img src={Logo} alt="" />
      </nav>
      <section className="relative">
        <div className="flex justify-center items-center">
          <div className="absolute top-14">
            <div className="flex flex-col items-center">
              <img src={hero} alt="" />
              <p className="text-amber-100 text-lg font-title mt-10 w-96 text-center">
                Discover stories from all around the world or let your own ideas
                take flight
              </p>
            </div>
            <Link to="/signin">
              <div className="flex items-center justify-center">
                <img src={buttonimg} alt="" className="h-9 w-22 mt-16" />
              </div>
            </Link>
          </div>
        </div>
        <img src={grid} alt="" />
      </section>
    </div>
  );
};

export default Landing;
