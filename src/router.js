import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./layout/home/Home";
import Resume from "./layout/resume/Resume";
import PortfolioPage  from "./layout/portfolio/Portfolio";
import Blog from "./layout/blog/Blog";
import ContactPage from './layout/contact/Contact'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Router;
