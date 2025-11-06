import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiSettings, FiInfo, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar({ sortAlphabetically, setSortAlphabetically }) {
  const [showSettings, setShowSettings] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const sidebarBg =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const hoverBg = theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-200";
  const borderColor =
    theme === "dark" ? "border-gray-700" : "border-gray-300";

  return (
    <>
      {/* Tombol toggle (menu hamburger muncul di kiri saat tertutup) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className={`fixed top-4 left-4 z-50 p-2 rounded-lg shadow-md ${
              theme === "dark"
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } transition-all duration-300`}
          >
            <FiMenu size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`${sidebarBg} fixed top-0 left-0 h-full w-56 flex flex-col items-start p-4 gap-6 shadow-lg z-40 border-r ${borderColor}`}
      >
        {/* Header sidebar */}
        <div className="flex items-center justify-between w-full mb-4">
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold"
          >
            🌍 Country
          </motion.h2>

          <motion.button
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setIsOpen(false)}
            className={`p-2 rounded-lg ${
              theme === "dark"
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            <FiX size={20} />
          </motion.button>
        </div>

        {/* Menu navigasi */}
        <nav className="flex flex-col gap-4 w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition ${hoverBg}`}
          >
            <FiHome className="text-xl" />
            <span>Dashboard</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowSettings((prev) => !prev)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition ${hoverBg}`}
          >
            <FiSettings className="text-xl" />
            <span>Settings</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition ${hoverBg}`}
          >
            <FiInfo className="text-xl" />
            <span>About</span>
          </motion.button>
        </nav>
      </motion.div>

      {/* Settings Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: showSettings ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 right-0 h-full w-72 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-gray-900"
        } p-6 shadow-2xl z-50`}
      >
        <h3 className="text-xl font-semibold mb-6">Settings</h3>

        <div className="space-y-6">
          <div>
            <p className="text-sm opacity-70 mb-2">Theme</p>
            <div className="flex flex-col gap-2">
              <button
                className={`w-full p-2 rounded transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => toggleTheme("dark")}
              >
                Dark Mode 🌙
              </button>
              <button
                className={`w-full p-2 rounded transition-all duration-200 ${
                  theme === "light"
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => toggleTheme("light")}
              >
                Light Mode ☀️
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm opacity-70 mb-2">Sort Countries</p>
            <button
              onClick={() => setSortAlphabetically((prev) => !prev)}
              className={`w-full p-2 rounded transition-all duration-200 ${
                sortAlphabetically
                  ? "bg-green-600 hover:bg-green-500 text-white"
                  : theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {sortAlphabetically ? "A → Z (Sorted)" : "Sort A → Z"}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}