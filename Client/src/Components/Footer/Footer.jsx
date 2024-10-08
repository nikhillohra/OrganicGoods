import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="gfooter flex flex-col items-center p-4 bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-col items-center">
        {/* Left Side */}
        <div className="flex flex-col items-center mb-4">
          <span className="md:text-sm text-xs font-medium text-gray-900">
            Naturally Grown, Straight from OGs
          </span>
          <img
            width={120}
            height={120}
            className="mt-2 mix-blend-multiply"
            src="./nobbg.webp"
            alt="logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="mb-4">
          <ul className="flex gap-4 md:text-sm text-xs">
            <li>
              <NavLink to="/" className="cursor-pointer hover:text-red-800">
                Home
              </NavLink>
            </li>
            <li>
              <Link
                to="products"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-red-800"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-red-800"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <NavLink
                to="/about"
                className="cursor-pointer hover:text-red-800"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Copyright Text */}
        <p className="md:text-xs text-[10px] font-[400] text-gray-900">
          2024 © ORGANIC GOODS
        </p>
      </div>
    </section>
  );
};

export default Footer;
