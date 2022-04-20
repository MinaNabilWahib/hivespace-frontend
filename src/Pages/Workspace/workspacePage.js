import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChannelLoop from "../../Components/channelComponent/channelLoop";
import Chat from "../../Components/ChatComponent/chatComponent";
import Addworkspace from "../../Components/workspaceListAside/addWorkspace";
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
