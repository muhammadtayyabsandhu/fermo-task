// src/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4">
        <Outlet /> {/* Yahan child route ka content load hoga */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
