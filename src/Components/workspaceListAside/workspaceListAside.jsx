import { useDispatch, useSelector } from "react-redux";
import { setOpenWorkspace } from "../../Store/actions/workspace";
import WorkspaceListIcon from "./workspaceListIcon";
import Addworkspace from "./addWorkspace";

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

      <Addworkspace />
    </div>
  );
};

export default WorkspaceListAside;
