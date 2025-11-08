import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiSettings, FiInfo, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar({ sortAlphabetically, setSortAlphabetically }) {
  const [showSettings, setShowSettings] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const sidebarBg =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const hoverBg = theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <>
      {/* Mobile hamburger when closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(true)}
            className={`fixed top-4 left-4 z-50 p-2 rounded-md shadow ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-900"
            }`}
          >
            <FiMenu size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -260 }}
        animate={{ x: isOpen ? 0 : -260 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`${sidebarBg} fixed top-0 left-0 h-full w-56 p-4 shadow-lg z-40 border-r ${borderColor} flex flex-col`}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-2xl font-bold">🌍 Country</span>
            <div className="text-xs text-gray-400">Explorer</div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className={`p-1 rounded ${
              theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            aria-label="close sidebar"
          >
            <FiX size={18} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          <button
            onClick={() => navigate("/")}
            className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium ${hoverBg}`}
          >
            <FiHome className="text-lg" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setShowSettings((s) => !s)}
            className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium ${hoverBg}`}
          >
            <FiSettings className="text-lg" />
            <span>Settings</span>
          </button>

          <button
            onClick={() => navigate("/about")}
            className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium ${hoverBg}`}
          >
            <FiInfo className="text-lg" />
            <span>About</span>
          </button>
        </nav>

        {/* <div className="mt-auto">
          <div className="text-xs text-gray-400 mb-2">Appearance</div>
          <div className="flex gap-2">
            <button
              onClick={() => toggleTheme("dark")}
              className={`flex-1 p-2 rounded-md text-sm ${
                theme === "dark"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              Dark
            </button>
            <button
              onClick={() => toggleTheme("light")}
              className={`flex-1 p-2 rounded-md text-sm ${
                theme === "light"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              Light
            </button>
          </div>

          <div className="mt-4">
            <button
              onClick={() => setSortAlphabetically((s) => !s)}
              className={`w-full p-2 rounded-md text-sm mt-2 ${
                sortAlphabetically
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {sortAlphabetically ? "A → Z (Sorted)" : "Sort A → Z"}
            </button>
          </div>
        </div> */}
      </motion.aside>

      {/* Settings slide panel (right) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: showSettings ? 0 : "100%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 right-0 h-full w-72 p-6 z-50 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } shadow-2xl`}
      >
        <h3 className="text-lg font-semibold mb-4">Settings</h3>
        <div className="space-y-4">
          <div>
            <div className="text-xs text-gray-400 mb-2">Theme</div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleTheme("dark")}
                className="flex-1 p-2 rounded-md bg-gray-900 text-white"
              >
                Dark Mode
              </button>
              <button
                onClick={() => toggleTheme("light")}
                className="flex-1 p-2 rounded-md bg-gray-100"
              >
                Light Mode
              </button>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-400 mb-2">Sort Countries</div>
            <button
              onClick={() => setSortAlphabetically((s) => !s)}
              className={`w-full p-2 rounded-md ${
                sortAlphabetically
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-900"
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
