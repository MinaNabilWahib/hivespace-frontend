import { useSelector } from "react-redux";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Messages from "./messages";
import NewMessage from "./newMessage";

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
	const user = useSelector((state) => state.user.user);
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		const newSocket = io(`https://localhost:8000`);
		setSocket(newSocket);

		newSocket.emit("joinRoom", {
			userId: user._id,
			roomId: openChannel,
		});

		return () => newSocket.close();
	}, [setSocket, openChannel, openWorkspace, user]);

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
			{socket ? (
				<>
					<Messages socket={socket} channel={channel} />
					<NewMessage socket={socket} channel={channel} />
				</>
			) : (
				<div>Socket Connection Failed. Please Try Again.</div>
			)}
		</div>
	);
};

export default Chat;
