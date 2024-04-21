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

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // Datos de landing page
  const [landingPageData, setLandingPageData] = useState({});
  
  const [positions, setPositions] = useState([]);
  const [results,setResults]=useState([]);

  useEffect(() => {
    fetchPositions(); // Llama a la función fetchPositions cuando el componente se monta
  }, []);

  const fetchPositions = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/profession'); // Realiza la solicitud a la API
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

  const fetchData=async(option)=>{
    try {
      const response=await fetch(`http://localhost:4000/api/childProfession?id_profession=${option}`);
      const data=await response.json();
      console.log(data.data);
      setResults(data.data);
    } catch (error) {
      console.error('Error al obtener datos:',error);
    }
  }

  const handleOptions=(option)=>{
    fetchData(option);
  }
  const handleChildOption=(option)=>{
    fetchData(option);
  }
  return (
    <div>
      <Navigation positions={positions} onOptionClick={handleOptions} />
      <Header data={landingPageData.Header} />
      <Results data={results} onOptionClick={handleChildOption}/>
      {/* <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />  */}
    </div>
  );
};

export default App;
