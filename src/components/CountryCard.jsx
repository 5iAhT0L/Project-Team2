import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function CountryCard({ country }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <article
      onClick={() => navigate(`/country/${encodeURIComponent(country.name.common)}`)}
      className={`cursor-pointer rounded-lg overflow-hidden transition-transform duration-200 transform hover:-translate-y-1 ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-gradient-to-b from-gray-800 to-gray-900 text-white"
      } shadow-sm border ${theme === "light" ? "border-gray-200" : "border-transparent"}`}
    >
      <div className="w-full h-44 md:h-56 overflow-hidden bg-gray-200">
        <img
          src={country.flags.svg || country.flags.png}
          alt={country.name.common}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{country.name.common}</h2>
        <p className="text-sm text-gray-400 mb-0">Capital: {country.capital?.[0] || "—"}</p>
        <p className="text-sm text-gray-400">Population: {country.population?.toLocaleString() || "—"}</p>
      </div>
    </article>
  );
}
