import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "./Components/yindex";
import { Home, AboutUs } from "./Pages/zindex";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Helmet>
          <title>Organic Goods</title>
          <meta
            name="description"
            content="Organic Goods offers high-quality organic products, including Desi Murga (Country Chicken), Desi Eggs, and fresh fish varieties like Catla, Rohu, and Pangas."
          />
          <meta
            name="keywords"
            content="Organic Goods, Desi Murga, Country Chicken, Desi Eggs, Catla, Rohu, Pangas, Organic Farm, Poultry, Fish Farming, Brown Eggs, Sonali, Pure Desi Murga, Pure Desi Murgi, Pure Desi Eggs, Free Range, Protein, High Protein, Fresh Eggs, Fresh Chicken, Farm, Fish Farm, Desi Murga Poultry"
          />
          <meta name="author" content="Nikhil Lohra" />
          <meta property="og:title" content="Organic Goods" />
          <meta
            property="og:description"
            content="Discover Organic Goods, your source for high-quality organic products including Desi Murga, Desi Eggs, and fresh fish varieties like Catla, Rohu, and Pangas."
          />
          <meta property="og:image" content="/nobbg.webp" />
          <meta property="og:url" content="https://www.organicgoods.in" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
