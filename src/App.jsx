import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { items as initialItems } from "./data.js";

import Home from "./pages/Home.jsx";
import ReportLost from "./pages/ReportLost.jsx";
import ReportFound from "./pages/ReportFound.jsx";
import ItemDetails from "./ItemDetails.jsx";
import Footer from "./Homepage/Footer.jsx";

function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

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