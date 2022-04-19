import "./SectionTwo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faH,
  faI,
  faV,
  faE,
  faS,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";
const SectionTwo = () => {
  return (
    <div className="bg-[#022c43] h-[500px] w-90% flex items-center flex-col ">
      <div className="font-bold font-mono text-centre text-5xl">
        Enjoy your journey with us
      </div>
      <div className="cubecontainer m-[100px]">
        <div className="cubespinner ">
          <div className="face1">
            <FontAwesomeIcon icon={faH} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faI} color="#5ED4F4" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faV} color="#5ED4F4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faE} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faS} color="#5ED4F4" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faPersonWalking} color="#5ED4F4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
