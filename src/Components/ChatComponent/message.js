const Message = ({ message }) => {
	return (
		<div className="flex px-4 py-3">
			<div className="h-10 w-10 rounded flex-shrink-0 bg-gray-300"></div>
			<div className="ml-2">
				<div className="-mt-1">
					<span className="text-sm font-semibold">Sam</span>
					<span className="ml-1 text-xs text-gray-500">01:26</span>
				</div>
				<p className="text-sm">Anyone know if Frodo is awake yet?</p>
			</div>
		</div>
	);
};

export default Message;
