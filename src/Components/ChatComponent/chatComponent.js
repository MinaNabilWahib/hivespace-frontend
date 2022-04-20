import { useSelector } from "react-redux";
import DateRule from "./dateRule";
import Message from "./message";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const Chat = () => {
	const workspace = useSelector((state) =>
		state.workspace.workspaces.find(
			(workspace) => workspace._id === state.workspace.openWorkspace
		)
	);
	const openChannel = useSelector((state) => state.workspace.openChannel);
	const openWorkspace = useSelector((state) => state.workspace.openWorkspace);
	const channel = workspace.channels.find(
		(channel) => channel._id === openChannel
	);
	const [socket, setSocket] = useState(null);
	const user = useSelector((state) => state.user.user);

	console.log(user);

	useEffect(() => {
		const newSocket = io(`https://localhost:8000`);
		setSocket(newSocket);

		// socket.emit("joinRoom", {
		// 	userId: "",
		// 	roomId: "625454301ca43cc8cf5ca8bc",
		// });

		// console.log(socket);

		return () => newSocket.close();
	}, [setSocket, openChannel, openWorkspace]);

	useEffect(() => {
		// socket.emit("joinRoom", {
		// 	userId: "",
		// 	roomId: "625454301ca43cc8cf5ca8bc",
		// });
	}, []);

	return (
		<div
			style={{ textAlign: "left", height: "100vh" }}
			className="flex flex-col flex-grow"
		>
			<div className="flex items-center flex-shrink-0 h-16 bg-white border-b border-gray-300 px-4">
				<div>
					<h1 className="text-sm font-bold leading-none">#{channel.title}</h1>
					<span className="text-xs leading-none">{channel.description}</span>
				</div>
			</div>
			<div
				style={{ overflowY: "scroll", overflowX: "hidden" }}
				className="flex flex-col flex-grow overflow-auto justify-end"
			>
				<Message />
				<DateRule date="Today" />
				<Message />
			</div>
			<div className="h-12 bg-white px-4 pb-4">
				<div className="flex items-center border-2 border-gray-300 rounded-sm p-1 pl-0">
					<input
						className="flex-grow text-sm px-3 ml-1 p-1"
						style={{ resize: "none" }}
						placeholder={`Message ${channel.title}`}
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
