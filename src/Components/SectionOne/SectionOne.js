import { useState, useEffect, Suspense } from "react";
import mainLogo from "../../Assets/images/mainLogo.png";
import AnimattedLetters from "../AnimattedLetters/AnimattedLetters.js";
import "./SectionOne.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import Box from "../box/box.js";
import Welcome from "../Welcome/Welcome.js";
const SectionOne = () => {
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
      <div className="sectionone font-mono bg-main ">
        <div className="left w-2/3 ">
          <h1 className="text-zone w-50% my-40 mx-24 text-7xl  ">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>W</span>
            <span className={`${letterClass} _14`}>e</span>&nbsp;
            <span className={`${letterClass} _15`}>a</span>
            <span className={`${letterClass} _16`}>r</span>
            <span className={`${letterClass} _17`}>e</span>
            <img className="image w-20 inline-block;" src={mainLogo} alt="" />
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
          <h2 className="text-zone w-50%  mx-24 text-7xl ">Everything you can imagine is real.</h2>
        </div>
        <div className="right w-1/3 opacity-0 md:opacity-100">
          {/* <Canvas className="canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[-2, 5, 2]} />
            <Box />
          </Canvas> */}
          <Canvas>
            <OrbitControls enableZoom={false} />
            <directionalLight intensity={0.5} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <Welcome />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
};
export default SectionOne;
