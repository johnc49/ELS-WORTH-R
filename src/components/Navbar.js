import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import p1 from "../images/p1.jpg";

const Navbar = () => {
  const [state, setState] = useState({ clicked: false });

  function handleClick() {
    setState({ clicked: !state.clicked });
  }

  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const divRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== divRef.current) {
      setOpen(false);
      setState({ clicked: false });
    }
  });

  return (
    <nav className=" relative container mx-auto navc">
      <div className="flex items-center justify-between px-2">
        <div className="m-2 ">
          <img className="h-12 w-12" src={p1} alt="" />
        </div>
        <div className="font-bold">
          <h1 className="text-xl">EL'S WORTH</h1>
          <h3 className="italic">Investments Limited</h3>
        </div>
        <div className="hidden space-x-4 md:flex">
          <Link to="/" className="hover:text-darkGrayishBlue">
            Home
          </Link>
          <Link to="/products" className="hover:text-darkGrayishBlue">
            Products
          </Link>
          <Link to="/services" className="hover:text-darkGrayishBlue">
            Services
          </Link>
          <Link to="/about" className="hover:text-darkGrayishBlue">
            About Us
          </Link>
          <Link to="/reviews" className="hover:text-darkGrayishBlue">
            Reviews
          </Link>
        </div>
        <div className="hidden sm:flex">
          <Link
            to="/login"
            className=" m-1 px-1 text-black bg-gray-100 rounded baseline hover:bg-gray-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className=" m-1 px-1  text-black bg-gray-100 rounded baseline hover:bg-gray-300"
          >
            Signup
          </Link>
        </div>

        <div onClick={handleClick} className="cursor-pointer m-2 md:hidden">
          <i
            ref={menuRef}
            onClick={() => {
              setOpen(!open);
            }}
            className={state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
      </div>
      {open && (
        <div className="md:hidden ">
          <div
            ref={divRef}
            onClick={() => {
              setOpen(false);
            }}
            className="absolute z-10 flex flex-col items-end py-2 px-2 mt-0 space-y-4 font-bold bg-gray-300 w-52 right-1 drop-shadow-md"
          >
            <Link className="hover:underline" to="/">
              Home
            </Link>
            <Link className="hover:underline" to="/products">
              Products
            </Link>
            <Link className="hover:underline" to="/services">
              Services
            </Link>
            <Link className="hover:underline" to="/about">
              About Us
            </Link>
            <Link className="hover:underline" to="/reviews">
              Reviews
            </Link>
            <div className=" sm:hidden">
              <Link
                to="/login"
                className=" m-1 px-1 py-1 border text-black bg-gray-100 rounded baseline hover:bg-gray-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className=" m-1 px-1  py-1 border text-black bg-gray-100 rounded baseline hover:bg-gray-300"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
