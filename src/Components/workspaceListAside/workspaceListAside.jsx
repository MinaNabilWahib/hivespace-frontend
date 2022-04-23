import { useDispatch, useSelector } from "react-redux";
import {
	setOpenChannel,
	setOpenWorkspace,
} from "../../Store/actions/workspace";
import WorkspaceListIcon from "./workspaceListIcon";
import Addworkspace from "./addWorkspace";

const WorkspaceListAside = () => {
	const workspaces = useSelector((state) => state.workspace.workspaces);
	const openWorkspace = useSelector((state) => state.workspace.openWorkspace);
	const dispatch = useDispatch();

	const handleSetOpenWorkspace = (workspaceId) => {
		const workspace = workspaces.find(
			(workspace) => workspace._id === workspaceId
		);
		dispatch(setOpenWorkspace(workspaceId));
		dispatch(setOpenChannel(workspace.channels[0]._id));
	};

	return (
		<div className="flex flex-col items-center flex-shrink-0 w-16 border-r border-gray-300 bg-gray-200 py-3">
			{console.log(workspaces)}
			{workspaces.map((workspace) => {
				return (
					<WorkspaceListIcon
						key={workspace._id}
						name={workspace.title}
						isOpen={workspace._id === openWorkspace}
						onClick={() => {
							handleSetOpenWorkspace(workspace._id);
							console.log(workspace._id);
						}}
					/>
				);
			})}

			<Addworkspace />
		</div>
	);
};

export default WorkspaceListAside;
