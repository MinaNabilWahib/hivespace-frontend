import { useEffect, useState } from "react";
import DateRule from "./dateRule";
import Message from "./message";

const Messages = ({ socket, channel }) => {
	const [messages, setMessages] = useState([]);

	const messageListener = (message) => {
		console.log(message);
		if (message !== null) {
			let date = new Date(parseInt(message.timestamp)).toLocaleDateString();
			setMessages((prevMessages) => ({
				...prevMessages,
				[date]:
					prevMessages[date] === undefined
						? [message]
						: [message, ...prevMessages[date]],
			}));
		}
	};

	useEffect(() => {
		setMessages({});
		socket.on("message", messageListener);
		socket.emit("getMessages", channel._id);

		return () => {
			socket.off("message", messageListener);
		};
	}, [socket]);

	return (
		<div
			style={{ overflowY: "hidden", overflowX: "hidden" }}
			className="flex flex-col-reverse flex-grow justify-end"
		>
			{Object.keys(messages).map((date) => {
				console.log(messages);
				return (
					<div
						key={date}
						style={{
							overflowY: "scroll",
							overflowX: "hidden",
							display: "flex",
							flexDirection: "column-reverse",
							flexGrow: 1,
						}}
					>
						{messages[date].map((message) => {
							return <Message key={message.timestamp} message={message} />;
						})}
						<DateRule
							key={date}
							date={date === new Date().toLocaleDateString() ? "Today" : date}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Messages;
