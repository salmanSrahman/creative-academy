import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/CommonPart/Header/Header";
import Footer from "./Components/CommonPart/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Faq from "./Components/FAQ/Faq";
import Contact from "./Components/Contact/Contact";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import Enroll from "./Components/Home/HomeServices/HomeService/Enroll/Enroll";
import ContactMessage from "./Components/Contact/ContactMessage/ContactMessage";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route
            path="/homeService/:serviceId"
            element={<ServiceDetails />}
          ></Route>
          <Route path="faq" element={<Faq />}></Route>
          <Route path="/enroll/:detailsId" element={<Enroll />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="contactMessage" element={<ContactMessage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
