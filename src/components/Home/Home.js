import { useState, useEffect } from "react";
import Loader from "react-loaders";
import mainLogo from "../../assets/images/mainLogo.png";
import AnimattedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Home.scss";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["i", "v", "e", " ", "S", "p", "a", "c", "e"];
  const usArray = ["w", "i", "t", "h", " ", "u", "s"];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <div className="container home-page">
        <h1 className="text-zone">
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>W</span>
          <span className={`${letterClass} _14`}>e</span>&nbsp;
          <span className={`${letterClass} _15`}>a</span>
          <span className={`${letterClass} _16`}>r</span>
          <span className={`${letterClass} _17`}>e</span>
          <img src={mainLogo} alt="" />
          <AnimattedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={18}
          />
          <br />
          <AnimattedLetters
            letterClass={letterClass}
            strArray={usArray}
            idx={27}
          />
        </h1>
        <h2>Everything you can imagine is real.</h2>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  );
};
export default Home;
