import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChannelLoop from "../../Components/channelComponent/channelLoop";
import Chat from "../../Components/ChatComponent/chatComponent";
import Addworkspace from "../../Components/workspaceListAside/addWorkspace";
import WorkspaceListAside from "../../Components/workspaceListAside/workspaceListAside";
import WorkspaceSidebar from "../../Components/workspaceSidebar/workspaceSidebar";

const Workspace = () => {
  const workspaces = useSelector((state) => state.workspace.workspaces);
  const openWorkspace = useSelector((state) => state.workspace.openWorkspace);
  const openChannel = useSelector((state) => state.workspace.openChannel);
  const dispatch = useDispatch();

  const handleChnageWorkspace = (id) => {};

  return (
    <div className="flex w-screen h-screen text-gray-700">
      <WorkspaceListAside
        workspaces={workspaces}
        openWorkspace={openWorkspace}
      />
      <WorkspaceSidebar />
      <Chat channel={openChannel} />
    </div>
  );
};

export default Workspace;
