import "flowbite";
import { useDispatch } from "react-redux";

const WorkspaceListIcon = ({ name, isOpen, onClick }) => {
	const dispatch = useDispatch();
	return (
		<div
			data-tooltip-target="tooltip-right"
			data-tooltip-placement="right"
			className="w-10 h-10 mb-4 rounded-lg bg-blue-400 hover:bg-gray-500 hover:cursor-pointer workspace-icon"
			style={{ border: isOpen ? "2px solid black" : "0" }}
			data-tooltip={name}
			onClick={onClick}
		></div>
	);
};

export default WorkspaceListIcon;
