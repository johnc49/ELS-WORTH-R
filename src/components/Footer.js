import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue container flex mx-auto">
      <div className=" flex flex-col-reverse px-6 py-2 space-y-8">
        <div className="flex flex-col-reverse items-center justify-between space-y-8 md:flex-col md:space-y-5">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          <div>
            <img src="./images/p1.jpg" className="h-8 text-center" alt="" />
          </div>

          <div className="flex justify-center space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=100087332168349">
              <img src="./images/icon-facebook.svg" alt="" className="h-8" />
            </Link>

            <Link href="el'sworth.invest@yahoo.com">
              <img src="./images/email.png" alt="" className="h-8" />
            </Link>

            <Link href="#">
              <img src="./images/icon-twitter.svg" alt="" className="h-8" />
            </Link>

            <Link href="#">
              <img src="./images/whatsapp.png" alt="" className="h-8" />
            </Link>

            <Link href="#">
              <img src="./images/icon-instagram.svg" alt="" className="h-8" />
            </Link>
          </div>
          <div className=" hidden text-white md:flex">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>

        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <Link href="/" className="hover:text-brightRed">
              Home
            </Link>
            <Link href="/products" className="hover:text-brightRed">
              Products
            </Link>
            <Link href="/services" className="hover:text-brightRed">
              Services
            </Link>
            <Link href="/about" className="hover:text-brightRed">
              About
            </Link>
            <Link href="#" className="hover:text-brightRed">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
