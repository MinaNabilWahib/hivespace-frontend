import "./Layout.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="page">
          <span className="tags top-tags">unleash your creativity</span>

          <Outlet />
          <span className="tags bottom-tags">
            <br />
            <span className="bottom-tag-html">Our Team</span>
          </span>
        </div>
        {/* <div className="div2">hello there</div> */}
      </div>
    </>
  );
};
export default Layout;
