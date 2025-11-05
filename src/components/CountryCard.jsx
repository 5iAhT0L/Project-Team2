import React from "react";

export default function CountryCard({ country }) {
  return (
    <div className="bg-gray-900 text-white rounded-2xl p-5 shadow-lg hover:scale-105 transition-all">
      <img
        src={country.flags?.png}
        alt={country.name.common}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
      <p className="text-gray-400">Region: {country.region}</p>
      <p className="text-gray-400">Capital: {country.capital?.[0]}</p>
      <p className="text-gray-400">Population: {country.population.toLocaleString()}</p>
    </div>
  );
}
