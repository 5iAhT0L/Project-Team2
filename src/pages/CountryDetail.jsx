// src/pages/CountryDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);

  if (!country)
    return (
      <p
        className={`text-center mt-20 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Loading...
      </p>
    );

  const lat = country.latlng?.[0];
  const lng = country.latlng?.[1];
  const mapImage = `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=4&size=600x400&maptype=mapnik`;

  return (
    <div
      className={`min-h-screen p-10 transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <Link
        to="/"
        className={`flex flex-row items-center mb-6 transition-colors duration-300 ${
          theme === "dark"
            ? "text-blue-400 hover:text-blue-300"
            : "text-blue-600 hover:text-blue-500"
        }`}
      >
        <IoMdArrowRoundBack className="w-[30px] h-[30px]" />
        <p className="text-lg">Back to Dashboard</p>
      </Link>

      <div
        className={`max-w-3xl mx-auto p-6 rounded-xl shadow-lg transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-900 shadow-gray-800"
            : "bg-white shadow-gray-300"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={country.flags?.png}
            alt={country.name.common}
            className="w-40 rounded shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{country.name.common}</h1>
            <p
              className={`mb-1 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p
              className={`mb-1 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span className="font-semibold">Capital:</span>{" "}
              {country.capital?.[0] || "N/A"}
            </p>
            <p
              className={`mb-1 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span className="font-semibold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p
              className={`mb-1 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
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
            className={`w-full h-80 object-cover rounded-lg border-2 shadow-md transition-all duration-300 ${
              theme === "dark"
                ? "border-gray-700 shadow-gray-800"
                : "border-gray-300 shadow-gray-200"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
