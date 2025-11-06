import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideBar";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    fetch("http://localhost:5000/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Failed to fetch countries:", err));
  }, []);

  const filtered = countries
    .filter((c) =>
      c.name.common.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) =>
      sortAlphabetically
        ? a.name.common.localeCompare(b.name.common)
        : 0
    );

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
    theme === "dark"
      ? "bg-gray-900 text-gray-100"
      : "bg-gray-100 text-gray-900"
  }`}
    >
      {/* Sidebar */}
      <Sidebar
        sortAlphabetically={sortAlphabetically}
        setSortAlphabetically={setSortAlphabetically}
      />
      <div className="ml-0 md:ml-64 px-4 sm:px-8 py-8">
        {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-center mt-4">
        Country Info Explorer
      </h1>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8 px-4">
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      {/* Country Cards */}
      <div className="px-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filtered.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      </div>
      
    </div>
  );
}
