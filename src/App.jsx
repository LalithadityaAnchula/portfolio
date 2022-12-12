import React from 'react';
import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Projects from "./components/pages/Projects";
import Footer from "./components/shared/Footer";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
