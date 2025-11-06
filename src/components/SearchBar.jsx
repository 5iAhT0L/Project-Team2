import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function SearchBar({ query, setQuery }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      className={`cursor-pointer flex items-center gap-2 backdrop-blur-md rounded-full px-4 py-2 transition-all duration-300 shadow-lg z-50 
        ${
          theme === "dark"
            ? "bg-gray-800/80 border border-gray-700"
            : "bg-white/80 border border-gray-300"
        }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(true)}
    >
      <FiSearch
        className={`text-xl cursor-pointer ${
          theme === "dark" ? "text-gray-200" : "text-gray-700"
        }`}
      />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country..."
        className={`bg-transparent outline-none border-none transition-all duration-300
          ${theme === "dark" ? "text-gray-200 placeholder-gray-400" : "text-gray-700 placeholder-gray-500"}
          ${isExpanded ? "w-48 opacity-100" : "w-0 opacity-0"}
        `}
      />
    </div>
  );
}
