import React from "react";
import { useNavigate } from "react-router-dom";

export default function CountryCard({ country }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/country/${country.name.common}`)}
      className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/20"
    >
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-100% h-100% object-cover rounded-md mb-3"
      />
      <h2 className="text-xl font-semibold">{country.name.common}</h2>
      <p className="text-gray-400 text-sm">Capital: {country.capital?.[0]}</p>
      <p className="text-gray-400 text-sm">Population: {country.population.toLocaleString()}</p>
    </div>
  );
}
