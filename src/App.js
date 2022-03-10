import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/CommonPart/Header/Header";
import Footer from "./Components/CommonPart/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Faq from "./Components/FAQ/Faq";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="faq" element={<Faq />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
