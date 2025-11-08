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
    .filter((c) => c.name.common.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) =>
      sortAlphabetically ? a.name.common.localeCompare(b.name.common) : 0
    );

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar
        sortAlphabetically={sortAlphabetically}
        setSortAlphabetically={setSortAlphabetically}
      />

      {/* Top bar */}
      <header className="sticky top-0 z-30 backdrop-blur-sm bg-opacity-50">
        <div
          className={`max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center gap-6 transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-900/60" : "bg-white/60"
          }`}
          style={{ marginLeft: 224 }} /* align with sidebar width (56*4) */
        >
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-bold tracking-tight">
              Country Info Explorer
            </h1>
          </div>

          <div className="flex-1 flex justify-center">
            <SearchBar query={query} setQuery={setQuery} />
          </div>

          <div className="flex-1"></div>
        </div>
      </header>

      {/* Main content (masonry/pinterest-like) */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8" style={{ marginLeft: 224 }}>
        <section
          className="w-full"
          aria-label="country-grid"
        >
          {/* masonry columns */}
          <div
            className="gap-6"
            style={{
              columnCount: 1,
              columnGap: "1.5rem",
            }}
          >
            {/* responsive column count (via inline script-like style) */}
            <style>{`
              @media (min-width: 640px) { div[aria-label="country-grid"] > div { column-count: 2; } }
              @media (min-width: 1024px) { div[aria-label="country-grid"] > div { column-count: 3; } }
              @media (min-width: 1280px) { div[aria-label="country-grid"] > div { column-count: 4; } }
            `}</style>

            {filtered.map((country) => (
              <div key={country.cca3 || country.name.common} className="mb-6 break-inside-avoid">
                <CountryCard country={country} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
