import React from "react";
import { BrowserRouter, Routes, Route } from "react-router"; 
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";
import Layout from "../layout/Layout.jsx";
import CarbonCalculator from "../components/Contact.jsx";
import Navbar from "../components/Navbar.jsx";




const CarbonCalculato = () => {
  return (
    <Layout>
      <Navbar/>
      <CarbonCalculator/>
    </Layout>
  );
};

export default CarbonCalculator;
