import React, { useState } from "react";
import { FiHome, FiSettings, FiInfo } from "react-icons/fi";

export default function Sidebar({
  sortAlphabetically,
  setSortAlphabetically,
  setActivePage, // ✅ tambahan prop untuk berpindah halaman
}) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-16 md:w-56 bg-gray-900 text-white flex flex-col items-center md:items-start p-4 gap-6 shadow-lg z-40 transition-all duration-300">
        <h2 className="hidden md:block text-2xl font-bold mb-4">🌍 Country</h2>

        <nav className="flex flex-col gap-4 w-full">
          {/* Dashboard Button */}
          <button
            onClick={() => setActivePage("dashboard")}
            className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-lg w-full transition-all duration-200"
          >
            <FiHome className="text-xl" />
            <span className="hidden md:inline">Dashboard</span>
          </button>

          {/* Settings Button */}
          <button
            onClick={() => setShowSettings((prev) => !prev)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-all duration-200 ${
              showSettings ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <FiSettings className="text-xl" />
            <span className="hidden md:inline">Settings</span>
          </button>

          {/* About Button */}
          <button
            onClick={() => setActivePage("about")}
            className="flex items-center gap-3 hover:bg-gray-700 px-3 py-2 rounded-lg w-full transition-all duration-200"
          >
            <FiInfo className="text-xl" />
            <span className="hidden md:inline">About</span>
          </button>
        </nav>
      </div>

      {/* Settings Panel (slide kanan) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gray-800 text-white p-6 shadow-2xl z-50 transform transition-transform duration-300 ${
          showSettings ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h3 className="text-xl font-semibold mb-6">Settings</h3>

        <div className="space-y-6">
          {/* Theme */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Theme</p>
            <button className="w-full p-2 bg-gray-700 rounded hover:bg-gray-600">
              Dark Mode 🌙
            </button>
            <button className="w-full p-2 bg-gray-700 rounded hover:bg-gray-600 mt-2">
              Light Mode ☀️
            </button>
          </div>

          {/* Sort Countries */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Sort Countries</p>
            <button
              onClick={() => setSortAlphabetically((prev) => !prev)}
              className={`w-full p-2 rounded transition-all duration-200 ${
                sortAlphabetically
                  ? "bg-green-600 hover:bg-green-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {sortAlphabetically ? "A → Z (Sorted)" : "Sort A → Z"}
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setShowSettings(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
        >
          ✕
        </button>
      </div>
    </>
  );
}
