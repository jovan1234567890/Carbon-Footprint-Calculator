import React from "react";
import { BrowserRouter, Routes, Route } from "react-router"; 
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";
import Layout from "../layout/Layout.jsx";
import AboutPages from "../components/About.jsx";



const AboutPage = () => {
  return (
    <Layout>
      <AboutPages/>
    </Layout>
  );
};

export default AboutPages;
