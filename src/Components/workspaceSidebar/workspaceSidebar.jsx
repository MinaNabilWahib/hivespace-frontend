import { useSelector } from "react-redux";

const WorkspaceSidebar = ({ openWorkSpace }) => {
	const workspace = useSelector((state) =>
		state.workspace.workspaces.find(
			(workspace) => workspace._id === state.workspace.openWorkspace
		)
	);
	console.log("WORKSPACE:", workspace);
	return (
		<div className="flex flex-col flex-shrink-0 w-64 border-r border-gray-300 bg-gray-100">
			<button className="flex-shrink-0 relative text-sm focus:outline-none group">
				<div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
					<span className="font-medium">Dropdown</span>
					<svg
						className="w-4 h-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
					<a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
						Menu Item 1
					</a>
					<a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
						Menu Item 1
					</a>
					<a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
						Menu Item 1
					</a>
				</div>
			</button>
			<div className="h-0 overflow-auto flex-grow">
				<div className="mt-3">
					<a
						className="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
						href="#"
					>
						<svg
							className="h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
							/>
						</svg>
						<span className="ml-2 leading-none">Threads</span>
					</a>
					<a
						className="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
						href="#"
					>
						<svg
							className="h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
							/>
						</svg>
						<span className="ml-2 leading-none font-bold">All DMs</span>
					</a>
					<a
						className="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
						href="#"
					>
						<span className="leading-none w-4">@</span>
						<span className="ml-2 leading-none">Mentions & Reactions</span>
					</a>
					<a
						className="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
						href="#"
					>
						<svg
							className="h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
							/>
						</svg>
						<span className="ml-2 leading-none">Saved Items</span>
					</a>
					<a
						className="flex items-center h-8 hover:bg-gray-300 text-sm px-3"
						href="#"
					>
						<svg
							className="h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
							/>
						</svg>
						<span className="ml-2 leading-none">More</span>
					</a>
				</div>
				<div className="mt-4">
					<div className="flex items-center h-8 px-3 group">
						<button
							id="channels_toggle"
							className="flex items-center flex-grow focus:outline-none"
						>
							<svg
								className="w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2 leading-none font-medium text-sm">
								Channels
							</span>
						</button>
						<button className="items-center justify-center h-6 w-6 ml-auto rounded hidden group-hover:flex hover:bg-gray-300">
							<svg
								className="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								/>
							</svg>
						</button>
						<button className="flex items-center justify-center h-6 w-6 ml-1 rounded hover:bg-gray-300">
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
						</button>
					</div>
					<div id="channels_list">
						<a
							className="flex items-center h-8 bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<svg
								className="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2 leading-none font-bold">
								council-of-elrond
							</span>
						</a>
						<a
							className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<svg
								className="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2 leading-none">the-fellowship</span>
						</a>
						<a
							className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<svg
								className="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2 leading-none">and-another</span>
						</a>
						<a
							className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<svg
								className="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2 leading-none font-bold">
								second-breakfast-fans
							</span>
						</a>
						<a
							className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<svg
								className="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2 leading-none">anduril-smithy-club</span>
						</a>
					</div>
				</div>
				<div className="mt-4">
					<div className="flex items-center h-8 px-3 group">
						<button
							id="messages_toggle"
							className="flex items-center flex-grow focus:outline-none"
						>
							<svg
								className="w-4 h-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="ml-2 leading-none font-medium text-sm">
								Direct Messages
							</span>
						</button>
						<button className="items-center justify-center h-6 w-6 ml-auto rounded hidden group-hover:flex hover:bg-gray-300">
							<svg
								className="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								/>
							</svg>
						</button>
						<button className="flex items-center justify-center h-6 w-6 ml-1 rounded hover:bg-gray-300">
							<svg
								className="h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
						</button>
					</div>
					<div id="messages_list">
						<a
							className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<div className="flex justify-center w-4">
								<span className="w-2 h-2 rounded-full bg-blue-500"></span>
							</div>
							<span className="ml-2 leading-none font-bold">Frodo Baggins</span>
							<span className="flex items-center justify-center bg-blue-500 rounded-full font-medium h-5 px-2 ml-auto text-xs text-white">
								3
							</span>
						</a>
						<a
							className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<div className="flex justify-center w-4">
								<span className="w-2 h-2 rounded-full bg-blue-500"></span>
							</div>
							<span className="ml-2 leading-none">Gandalf The Grey</span>
						</a>
						<a
							className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<div className="flex justify-center w-4">
								<span className="w-2 h-2 rounded-full border-2 border-gray-500"></span>
							</div>
							<span className="ml-2 leading-none text-gray-500">
								Gimli son of Gloin
							</span>
						</a>
						<a
							className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<div className="flex justify-center items-center rounded bg-gray-600 w-4 h-4">
								<span className="text-xs text-white">2</span>
							</div>
							<span className="ml-2 leading-none font-bold">Pippin, Merry</span>
							<span className="flex items-center justify-center bg-blue-500 rounded-full font-medium h-5 px-2 ml-auto text-xs text-white">
								1
							</span>
						</a>
						<a
							className="flex items-center h-8 hover:bg-gray-300 text-sm pl-8 pr-3"
							href="#"
						>
							<div className="flex justify-center items-center rounded bg-gray-600 w-4 h-4">
								<span className="text-xs text-white">3</span>
							</div>
							<span className="ml-2 leading-none">
								Galadriel, Elrond, Arwen
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkspaceSidebar;
