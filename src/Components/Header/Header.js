import "./Header.scss";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="w-[100%] h-[80px] z-10 bg-primary drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl text-orange-500 ml-3 mr-3 font-bold  sm:text-4xl">
            HIVE SPACE.
          </h1>
          <ul className="hidden  md:flex   text-orange-500 ">
            <NavLink
              className="p-10"
              to="/home"
              exact="true"
              style={(isActive) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              HOME
            </NavLink>
            <NavLink
              className="p-10"
              to="/about"
              exact="true"
              style={(isActive) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              ABOUT
            </NavLink>
            <NavLink
              className="p-10"
              to="/contact"
              exact="true"
              style={(isActive) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              CONTACT US
            </NavLink>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="mr-20 px-4 py-4">Register</button>
          <button className="px-4 py-4">Login</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-11" /> : <XIcon className="w-11" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 flex flex-col"
        }
      >
        <NavLink className="border-b-2 border-blue-300 w-full  " to="/home">
          HOME
        </NavLink>
        <NavLink className="border-b-2 border-blue-300 w-full" to="/about">
          ABOUT
        </NavLink>
        <NavLink className="border-b-2 border-blue-300 w-full" to="/contact">
          CONTACT US
        </NavLink>
        <div className="flex flex-col my-4">
          <button className="  px-8 py-3 mb-4">Register</button>
          <button className="px-8 py-3">Login</button>
        </div>
      </ul>
    </div>
  );
};
export default Header;

//navbar padding on right is to much space between is better and give some padding to container
//image has to be smaller and font has to be bigger and bold and upper case and hover effect and cursor pointing too
// and letter spacing : 1px is better
// #ff72(73/74)00
// instead of margin between lists item use gap

// <div>
// <header>
// <nav className="navbar container">
//   <div className="logo">
//     <img src={mainLogo} alt="" />
//   </div>
//   <ul className={open ? `nav-items active ` : `nav-items`}>
//     <li>About</li>
//     <li>Contact</li>
//     <li className="btn btn--nav-btn">Register</li>
//   </ul>
//   <div className="hamburger">
//     <img src={hamburger} alt="" onClick={handleClick} />
//   </div>
// </nav>
// </header>
//  </div>