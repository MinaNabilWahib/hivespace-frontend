import { useDispatch } from "react-redux";
import { setOpenWorkspace } from "../../Store/actions/workspace";
import WorkspaceListIcon from "./workspaceListIcon";

const WorkspaceListAside = ({ workspaces, openWorkspace }) => {
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col items-center flex-shrink-0 w-16 border-r border-gray-300 bg-gray-200 py-3">
			{workspaces.map((workspace) => {
				return (
					<WorkspaceListIcon
						key={workspace._id}
						name={workspace.title}
						isOpen={workspace._id === openWorkspace}
						onClick={() => dispatch(setOpenWorkspace(workspace._id))}
					/>
				);
			})}
			{/* TODO:: ADD WORKSPACE */}
			<a
				className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent hover:bg-gray-400"
				href="#"
				onClick={() => console.log("ADD WORKSPACE")}
			>
				<svg
					className="w-6 h-6 fill-current"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 6v6m0 0v6m0-6h6m-6 0H6"
					></path>
				</svg>
			</a>
		</div>
	);
};

export default WorkspaceListAside;
