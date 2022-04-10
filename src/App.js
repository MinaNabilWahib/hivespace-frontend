import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/About" element={<About />} /> */}
        </Route>
        <Route path="/About" element={<Layout />}>
          <Route index element={<About />} />
          {/* <Route path="/About" element={<About />} /> */}
        </Route>
        <Route path="/Contact" element={<Layout />}>
          <Route index element={<Contact />} />
          {/* <Route path="/About" element={<About />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
