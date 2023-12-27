import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import About from "./Pages/About";
import GraphicePage from "./Pages/ServicesPages/GraphicePage";
import UIPages from "./Pages/ServicesPages/UIPages";
import VideoPage from "./Pages/ServicesPages/VideoPage";
import ModelingPage from "./Pages/ServicesPages/ModelingPage";
import DevelopmentPage from "./Pages/ServicesPages/DevelopmentPage";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" exact element={<Portfolio />} />
          <Route path="services" exact element={<Services />} />
          <Route path="about" exact element={<About />} />
          <Route path="graphice-designing" exact element={<GraphicePage />} />
          <Route path="ui-ux-designing" exact element={<UIPages />} />
          <Route path="video-editing" exact element={<VideoPage />} />
          <Route path="3d-modeling" exact element={<ModelingPage />} />
          <Route path="web-and-app-development" exact element={<DevelopmentPage />} />
          <Route path="contactus" exact element={<Contact />} />
          <Route path="*" exact element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}