const Message = ({ message }) => {
  console.log(message);
  return (
    <div className="flex px-4 py-3">
      <img
        src={message.sender.image}
        alt="test"
        className="h-10 w-10 rounded flex-shrink-0"
      ></img>
      <div className="ml-2">
        <div className="-mt-1">
          <span className="text-sm font-semibold">
            {message.sender.first_name + " " + message.sender.last_name}
          </span>
          <span className="ml-1 text-xs text-gray-500">
            {new Date(parseInt(message.timestamp)).toLocaleTimeString()}
          </span>
        </div>
        <p className="text-sm">{message.data}</p>
      </div>
    </div>
  );
};

export default Message;
