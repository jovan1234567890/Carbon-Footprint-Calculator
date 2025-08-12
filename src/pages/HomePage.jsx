import React from "react";
import { BrowserRouter, Routes, Route } from "react-router"; 
import Jumbotron from "../components/Jumbotron.jsx";
import Layout from "../layout/Layout.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "../components/Contact.jsx";
import HalamanKontak from "./HalamanKontak.jsx";
import Card from "../components/Card"
import CarbonFootprintSection from "../components/Section"
import { Section } from "lucide-react";
import CarbonCalculator from "../components/Contact.jsx";



const HomePage = () => {
  return (
    <Layout>
      <Jumbotron />
      <Card/>
      <CarbonFootprintSection/>
      <CarbonCalculator/>
    </Layout>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<HalamanKontak />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
