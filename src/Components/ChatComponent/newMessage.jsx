import { useState } from "react";

const NewMessage = ({ channel, socket }) => {
	const [value, setValue] = useState("");
	const sendMessage = () => {
		if (value !== "") {
			socket.emit("message", value);
			setValue("");
		}
	};
	const handleEnter = (e) => {
		if (e.key === "Enter") {
			sendMessage();
		}
	};
	return (
		<div className="h-12 bg-white px-4 pb-4">
			<div className="flex items-center border-2 border-gray-300 rounded-sm p-1 pl-0">
				<input
					className="flex-grow text-sm px-3 ml-1 p-1"
					style={{ resize: "none" }}
					placeholder={`Message ${channel.title}`}
					value={value}
					onChange={(e) => {
						setValue(e.currentTarget.value);
					}}
					onKeyDown={handleEnter}
				></input>
				<button
					className="flex-shrink flex items-center justify-center h-6 w-6 rounded hover:bg-gray-200"
					onClick={sendMessage}
				>
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
	);
};

export default NewMessage;
