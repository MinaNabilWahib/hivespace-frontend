import "./scss/main.scss";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" exact element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
        <Routes>
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
