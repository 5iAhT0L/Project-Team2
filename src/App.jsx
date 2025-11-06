import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CountryDetail from "./pages/CountryDetail";
import "./index.css";




export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/country/:name" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
  );
}
