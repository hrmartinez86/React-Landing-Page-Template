import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    fetchPositions(); // Llama a la función fetchPositions cuando el componente se monta
  }, []);

  const fetchPositions = async () => {
    try {
      const response = await fetch('http://localhost:4010/api/profession'); // Realiza la solicitud a la API
      const data = await response.json(); // Convierte la respuesta en formato JSON
      console.log(data);
      setPositions(data.Profession); // Actualiza el estado con las posiciones recuperadas
    } catch (error) {
      console.error('Error fetching positions:', error);
    }
  };
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation positions={positions} />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
