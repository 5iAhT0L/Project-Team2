import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideBar";
import About from "./About";

export default function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [activePage, setActivePage] = useState("dashboard"); // ← halaman aktif

  useEffect(() => {
    fetch("http://localhost:5000/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const filtered = countries
    .filter((c) => c.name.common.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) =>
      sortAlphabetically ? a.name.common.localeCompare(b.name.common) : 0
    );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 pl-20 md:pl-64 transition-all duration-300">
      <Sidebar
        sortAlphabetically={sortAlphabetically}
        setSortAlphabetically={setSortAlphabetically}
        setActivePage={setActivePage} // ← kirim handler ke Sidebar
      />

      {activePage === "dashboard" && (
        <>
          <h1 className="text-4xl font-bold mb-6 text-center">
            Country Info Explorer
          </h1>
          <SearchBar query={query} setQuery={setQuery} />
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {filtered.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        </>
      )}

      {activePage === "about" && <About />}
    </div>
  );
}
