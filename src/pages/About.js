import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-center text-2xl">About Us</h1>
      <p className="leading">
        EL'S WORTH has highly qualified enginners in the filed of HVAC and you
        can trust us to design, install, service and repair your aircon units in
        your homes, shops offices and ware houses
      </p>
      <div>
        <h1 className="text-2xl font-bold text-center ">Contact Us</h1>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-black">
            <h2>
              Email:{" "}
              <span>
                <Link href="/" className="hover:text-brightRed underline">
                  el'sworth.invest@yahoo.com
                </Link>
              </span>{" "}
            </h2>
            <h2>
              Phone Numbers: <span>0968450326/ 0962795445</span>
            </h2>
            <Link href="/services" className="hover:text-brightRed">
              Facebook
            </Link>
            <Link href="/about" className="hover:text-brightRed">
              Instagram
            </Link>
            <Link href="#" className="hover:text-brightRed">
              Whatsapp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
