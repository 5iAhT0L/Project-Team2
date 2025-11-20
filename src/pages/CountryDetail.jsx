// src/pages/CountryDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [history, setHistory] = useState("");
  const { theme } = useTheme();

  // Fetch country data
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [name]);

  // Fetch Wikipedia summary
  useEffect(() => {
    if (!country) return;

    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${country.name.common}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.extract) setHistory(data.extract);
        else setHistory("No historical information available.");
      });
  }, [country]);

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

      {/* Main Card (Informasi + Sejarah Menyatu) */}
      <div
        className={`max-w-4xl mx-auto p-8 rounded-xl shadow-lg transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-900 shadow-gray-800"
            : "bg-white shadow-gray-300"
        }`}
      >
        {/* Informasi Negara */}
        <div className="flex flex-col md:flex-row gap-6 items-center pb-6 border-b border-gray-600/30">
          <img
            src={country.flags?.png}
            alt={country.name.common}
            className="w-40 rounded shadow-md"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">{country.name.common}</h1>
            <p className="mb-1">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Capital:</span>{" "}
              {country.capital?.[0] || "N/A"}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Independent:</span>{" "}
              {country.independent ? "Yes" : "No"}
            </p>
          </div>
        </div>

        {/* Sejarah */}
        <div className="mt-6">
          <h2 className="text-3xl font-semibold mb-4">
            Sejarah {country.name.common}
          </h2>
          <p
            className={`leading-8 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {history}
          </p>
        </div>
      </div>
    </div>
  );
}
