import "./Home.scss";

import SectionOne from "../../Components/SectionOne/SectionOne";
import SectionTwo from "../../Components/SectionTwo/SectionTwo";
import Loader from "react-loaders";

const Home = () => {
  return (
    <div>
      <Loader type="ball-pulse-sync" color="yellow" />
      <SectionOne />
      <SectionTwo />
    </div>
  );
};
export default Home;
