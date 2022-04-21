import Chat from "../../Components/ChatComponent/chatComponent";
import WorkspaceListAside from "../../Components/workspaceListAside/workspaceListAside";
import WorkspaceSidebar from "../../Components/workspaceSidebar/workspaceSidebar";

const Workspace = () => {
	return (
		<div className="flex w-screen h-screen text-gray-700">
			<WorkspaceListAside />
			<WorkspaceSidebar />
			<Chat />
		</div>
	);
};

export default Workspace;
