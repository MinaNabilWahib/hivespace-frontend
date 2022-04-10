import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import mainLogo from "../../assets/images/mainLogo.png";
import hivespace from "../../assets/images/hivespace.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" exact="true" to="/">
          <img src={mainLogo} alt="Logo" />
          <img className="hivespace" src={hivespace} alt="hivespace" />
        </Link>
        <nav>
          <NavLink activeclassname="active" to="/" exact="true">
            <FontAwesomeIcon icon={faHome} color="4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="about-link"
            to="/About"
            exact="true"
          >
            <FontAwesomeIcon icon={faUser} color="4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/Contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
          </NavLink>
        </nav>
      </div>
    </>
  );
};
export default Sidebar;
