import Chat from "../../Components/ChatComponent/chatComponent";
import WorkspaceListAside from "../../Components/workspaceListAside/workspaceListAside";
import WorkspaceSidebar from "../../Components/workspaceSidebar/workspaceSidebar";
import { useSelector } from "react-redux";

const Workspace = () => {
	const workspaces = useSelector((state) => state.workspace.workspaces);
	const openWorkspace = useSelector((state) => state.workspace.openWorkspace);
	return (
		<div className="flex w-screen h-screen text-gray-700">
			<WorkspaceListAside />
			{workspaces.length > 0 ? (
				<div className="flex w-screen h-screen text-gray-700">
					<WorkspaceSidebar />
					<Chat />
				</div>
			) : (
				<div
					style={{
						padding: "10px",
						fontWeight: "bold",
					}}
				>
					<h1>Create your first workspace.</h1>
					<h1
						style={{
							fontSize: "2rem",
						}}
					>
						←
					</h1>
				</div>
			)}
		</div>
	);
};

export default Workspace;
