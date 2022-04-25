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
    <div className="bg-main h-[500px] w-90% flex items-center flex-col pt-10">
      <div className="font-bold font-mono text-centre text-5xl">
        Enjoy your journey with us
      </div>
      <div className="cubecontainer m-[100px] bg-primary">
        <div className="cubespinner bg-primary">
          <div className="face1 bg-primary">
            <FontAwesomeIcon icon={faH} color="#5ED4F4" />
          </div>
          <div className="face2 bg-primary">
            <FontAwesomeIcon icon={faI} color="#5ED4F4" />
          </div>
          <div className="face3 bg-primary">
            <FontAwesomeIcon icon={faV} color="#5ED4F4" />
          </div>
          <div className="face4 bg-primary">
            <FontAwesomeIcon icon={faE} color="#5ED4F4" />
          </div>
          <div className="face5 bg-primary">
            <FontAwesomeIcon icon={faS} color="#5ED4F4" />
          </div>
          <div className="face6 bg-primary">
            <FontAwesomeIcon icon={faPersonWalking} color="#5ED4F4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
