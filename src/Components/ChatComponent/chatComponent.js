import Message from "./message";

const Chat = (props) => {
	return (
		<div
			style={{ textAlign: "left", height: "100vh" }}
			className="flex flex-col flex-grow"
		>
			<div className="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
				<div>
					<h1 className="text-sm font-bold leading-none">#council-of-elrond</h1>
					<span className="text-xs leading-none">
						Let's sort this ring thing out hey!?!
					</span>
				</div>
			</div>
			<div
				style={{ overflowY: "scroll", overflowX: "hidden" }}
				className="flex flex-col flex-grow overflow-auto justify-end"
			>
				<Message />
				<div className="flex flex-col items-center mt-2">
					<hr className="w-full" />
					<span className="flex items-center justify-center -mt-3 bg-white h-6 px-3 rounded-full border text-xs font-semibold mx-auto">
						Today
					</span>
				</div>
				<Message />
			</div>
			<div className="h-12 bg-white px-4 pb-4">
				<div className="flex items-center border-2 border-gray-300 rounded-sm p-1 pl-0">
					<input
						className="flex-grow text-sm px-3 ml-1 p-1"
						style={{ resize: "none" }}
						placeholder="Message council-of-elrond"
					></input>
					<button className="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200">
						<svg
							className="h-4 w-4 transform rotate-90"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
