// src/pages/CountryDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);

  if (!country)
    return <p className="text-center text-gray-400 mt-20">Loading...</p>;

  const lat = country.latlng?.[0];
  const lng = country.latlng?.[1];

  // Simple static territorial map from OpenStreetMap tile servers
  const mapImage = `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=4&size=600x400&maptype=mapnik`;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <Link
        to="/"
        className="text-blue-400 hover:underline mb-6 inline-block"
      >
        ← Back to Dashboard
      </Link>

      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={country.flags?.png}
            alt={country.name.common}
            className="w-40 rounded shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{country.name.common}</h1>
            <p className="text-gray-300 mb-1">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="text-gray-300 mb-1">
              <span className="font-semibold">Capital:</span>{" "}
              {country.capital?.[0] || "N/A"}
            </p>
            <p className="text-gray-300 mb-1">
              <span className="font-semibold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p className="text-gray-300 mb-1">
              <span className="font-semibold">Independent:</span>{" "}
              {country.independent ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Territorial Map</h2>
          <img
            src={mapImage}
            alt={`Map of ${country.name.common}`}
            className="w-full h-80 object-cover rounded-lg border-2 border-gray-700 shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
