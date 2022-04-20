import { useDispatch, useSelector } from "react-redux";
import { setOpenChannel } from "../../Store/actions/workspace";
import Channel from "./channelComponent";

const ChannelLoop = () => {
  const workspaces = useSelector((state) => state.workspace.workspaces);
  const openWorkspace = useSelector((state) => state.workspace.openWorkspace);
  const openChannel = useSelector((state) => state.workspace.openChannel);
  const dispatch = useDispatch();

  return (
    <>
      {workspaces.map((workspace) => {
        if (workspace._id === openWorkspace) {
          workspace.channels.map((channel) => {
            return (
              <Channel
                key={channel._id}
                name={channel.title}
                isOpen={channel._id === openChannel}
                onClick={() => dispatch(setOpenChannel(channel._id))}
              />
            );
          });
        }
      })}
    </>
  );
};

export default ChannelLoop;
