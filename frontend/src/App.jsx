import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedArticles from "./components/FeaturedArticles";
import AuthorSpotlight from "./components/AuthorSpotlight";
import Newsletter from "./components/Newsletter";


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <CategoryFilter />
        <FeaturedArticles />
        <AuthorSpotlight />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
