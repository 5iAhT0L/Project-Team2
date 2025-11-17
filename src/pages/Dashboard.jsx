import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/SideBar";

export default function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "dark"; 
  });

  const darkBlueBg = "bg-[#0b1120]";
  const darkBlueHeader = "bg-[#101935]/70";
  const darkBlueText = "text-[#dbe4f3]";

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
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark" ? `${darkBlueBg} ${darkBlueText}` : "bg-gray-50 text-gray-900"
      }`}
    >
      <Sidebar
        sortAlphabetically={sortAlphabetically}
        setSortAlphabetically={setSortAlphabetically}
      />

      <header className="sticky top-0 z-30 backdrop-blur-sm">
        <div
          className={`max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center gap-6 md:ml-[237px] ml-14 ${
            theme === "dark" ? darkBlueHeader : "bg-white/60"
          }`}
        >
          <h1 className="text-md md:text-2xl font-bold flex-1">
            Country Info Explorer
          </h1>

          <div className="flex-1 flex justify-center">
            <SearchBar query={query} setQuery={setQuery} />
          </div>

          <div className="flex-1"></div>
        </div>
      </header>

      {/* ⭐ NEW GRID SYSTEM ⭐ */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:ml-[237px] ml-14">
        <section className="w-full">
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4 
              gap-6
            "
          >
            {filtered.map((country) => (
              <CountryCard
                key={country.cca3 || country.name.common}
                country={country}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
