import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ query, setQuery }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="fixed top-6 left-65 flex items-center gap-2 bg-gray-800/80 backdrop-blur-md rounded-full px-3 py-2 transition-all duration-300 shadow-lg z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(true)}
    >
      {/* Search icon */}
      <FiSearch className="text-white text-xl cursor-pointer" />

      {/* Expanding input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country..."
        className={`bg-transparent text-white placeholder-gray-300 outline-none border-none transition-all duration-300 ${
          isExpanded ? "w-48 opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
}
