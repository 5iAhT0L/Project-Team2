import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function CountryCard({ country }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <article
      onClick={() =>
        navigate(`/country/${encodeURIComponent(country.name.common)}`)
      }
      className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
        ${theme === "dark" ? "bg-[#101935] text-[#dbe4f3]" : "bg-white text-gray-900"}
      `}
    >
      <div className="w-full h-40 overflow-hidden">
        <img
          src={country.flags.svg || country.flags.png}
          alt={country.name.common}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">{country.name.common}</h2>
        <p className="text-sm opacity-70">Capital: {country.capital?.[0] || "—"}</p>
        <p className="text-sm opacity-70">
          Population: {country.population?.toLocaleString() || "—"}
        </p>
      </div>
    </article>
  );
}
