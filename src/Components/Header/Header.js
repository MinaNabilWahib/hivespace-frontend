import "./Header.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useLayoutEffect, useState, useEffect } from "react";
import cssVariables from "./../../Services/cssVariables";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, checkAuth } from "./../../Store/actions/user";
import { getToken } from "../../Services/tokenHandling";
import logo from "../../Assets/images/hivespace.svg";
import { getWorkspaces, resetWorkspaces } from "../../Store/actions/workspace";
const Header = () => {
	const [nav, setNav] = useState(false);
	const loggedIn = useSelector((state) => state.authorization.loggedIn);
	const user = useSelector((state) => state.authorization.currentUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleClick = () => {
		setNav(!nav);
	};

	useEffect(() => {
		dispatch(checkAuth(getToken()));
	}, [dispatch]);

	const colors = cssVariables.colors();
	const logout = () => {
		dispatch(logoutAction());
		dispatch(resetWorkspaces());
		navigate("/");
	};

	// console.log(user);

	return (
		<div className="w-[100%] h-[80px] z-10 bg-slate-900 drop-shadow-lg">
			<div className="px-2 flex justify-between items-center w-full h-full ">
				<div className="flex items-center">
					{/* <h1 className="text-3xl text-primary ml-3 mr-3 font-bold  sm:text-4xl">
            HIVE SPACE.
          </h1> */}
					<div className=" ml-3 mr-3 font-bold  ">
						<img
							className="w-40 h-auto  mx-auto"
							src={logo}
							alt="Hive Space Logo"
						/>
					</div>
					<ul className="hidden  md:flex   text-primary-light ">
						<NavLink
							className="p-10 font-bold"
							to="/home"
							exact="true"
							style={({ isActive }) => ({
								color: isActive ? colors.grayColor : colors.whiteColor,
							})}
						>
							HOME
						</NavLink>
						<NavLink
							className="p-10 font-bold"
							to="/about"
							exact="true"
							style={({ isActive }) => ({
								color: isActive ? colors.grayColor : colors.whiteColor,
							})}
						>
							ABOUT
						</NavLink>
						<NavLink
							className="p-10 font-bold"
							to="/contact"
							exact="true"
							style={({ isActive }) => ({
								color: isActive ? colors.grayColor : colors.whiteColor,
							})}
						>
							CONTACT US
						</NavLink>
					</ul>
				</div>
				{!loggedIn ? (
					<div className="hidden md:flex pr-4 text-white">
						<Link to={"/auth"} className="mr-20 px-4 py-4">
							Register
						</Link>
						<Link to={"/auth/login"} className="px-4 py-4">
							Login
						</Link>
					</div>
				) : (
					<div className="hidden md:flex pr-4 text-white">
						<Link
							to={"/workspace"}
							onClick={() => dispatch(getWorkspaces(user._id))}
							className="mr-20 px-4 py-4"
						>
							Workspace
						</Link>
						<button onClick={logout} className="px-4 py-4">
							Log out
						</button>
					</div>
				)}
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
				{!loggedIn ? (
					<div className="flex flex-col my-4 text-main-x">
						<Link to={"/auth"} className="  px-8 py-3 mb-4">
							Register
						</Link>
						<Link to={"/auth/login"} className="px-8 py-3">
							Login
						</Link>
					</div>
				) : (
					<div className="flex flex-col my-4 text-main-x">
						<Link
							to={"/workspace"}
							onClick={() => dispatch(getWorkspaces(user._id))}
							className="px-8 py-3 mb-4"
						>
							WorkSpace
						</Link>
						<Link to={logout} className="px-8 py-3">
							LogOut
						</Link>
					</div>
				)}
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
