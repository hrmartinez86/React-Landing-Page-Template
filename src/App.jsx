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
import { Results } from "./components/results";
import { ResultsChildProfession } from "./components/results-child-profession";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // Datos de landing page
  const [landingPageData, setLandingPageData] = useState({});

  const [positions, setPositions] = useState([]);
  const [results, setResults] = useState([]);
  const [results_child_prfession, setResults_Child_Professions] = useState([]);

  useEffect(() => {
    fetchPositions(); // Llama a la función fetchPositions cuando el componente se monta
  }, []);

  const fetchPositions = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/profession"); // Realiza la solicitud a la API
      const data = await response.json(); // Convierte la respuesta en formato JSON
      setPositions(data.Profession); // Actualiza el estado con las posiciones recuperadas
    } catch (error) {
      console.error("Error fetching positions:", error);
    }
  };

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const fetchData = async (option) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/childProfession?id_profession=${option}`
      );
      const data = await response.json();
      setResults_Child_Professions([]);
      setResults(data.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const fetchDataChild = async (option) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/subChildProfession?id_child_profession=${option}`
      );
      const data = await response.json();
      console.log(data);
      setResults([]);
      setResults_Child_Professions(data.record);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  const handleOptions = (option) => {
    fetchData(option);
  };
  const handleChildOption = (option) => {
    fetchDataChild(option);
  };
  return (
    <div>
      <Navigation positions={positions} onOptionClick={handleOptions} />
      <Header data={landingPageData.Header} />
      <Results data={results} onOptionClick={handleChildOption} />
      <ResultsChildProfession data={results_child_prfession} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} /> 
    </div>
  );
};

export default App;
