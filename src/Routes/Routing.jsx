// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";


const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* Parent Layout Route */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
  
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
