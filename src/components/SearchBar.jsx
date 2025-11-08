import React from "react";
import { FiSearch } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function SearchBar({ query, setQuery }) {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full max-w-xl flex items-center gap-3 rounded-full px-4 py-2 border shadow-sm transition-all duration-200 ${
        theme === "dark"
          ? "bg-gray-800/70 border-gray-700 text-gray-100"
          : "bg-white border-gray-200 text-gray-900"
      }`}
      role="search"
    >
      <FiSearch className={`text-lg ${theme === "dark" ? "text-gray-200" : "text-gray-500"}`} />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search countries, e.g. Indonesia"
        className={`w-full bg-transparent outline-none placeholder-gray-400 text-sm ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      />
    </div>
  );
}
