import { useEffect, useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { items as initialItems } from "./data.js";

import Home from "./pages/Home.jsx";
import ReportLost from "./pages/ReportLost.jsx";
import ReportFound from "./pages/ReportFound.jsx";
import ItemDetails from "./ItemDetails.jsx";
import Footer from "./Homepage/Footer.jsx";

import ScrollToHash from "./Homepage/ScrollToHash.jsx"

function App() {
    const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("totalItems");

    return savedItems ? JSON.parse(savedItems) : initialItems;
  });

  useEffect(() => {
  localStorage.setItem("totalItems", JSON.stringify(items));
}, [items]);

  return (
    <>
      {/* <ScrollToHash /> */}
      <Routes>


        <Route path="/" element={<Home items={items} />} />

        <Route
          path="/lost"
          element={<ReportLost items = {items} setItems={setItems} />}
        />

        <Route
          path="/found"
          element={<ReportFound items = {items} setItems={setItems} />}
        />

        <Route
          path="/lost/:id"
          element={<ItemDetails items={items} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;