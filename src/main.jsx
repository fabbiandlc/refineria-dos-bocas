import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <HeroSection />
    <Blogs />
    <Footer />
  </StrictMode>
);
