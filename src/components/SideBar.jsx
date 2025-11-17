import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiSettings, FiInfo, FiMenu } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar({ sortAlphabetically, setSortAlphabetically }) {
  const [showSettings, setShowSettings] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const sidebarBg =
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const hoverBg = theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <>
      {/* Hamburger - mobile only */}
      <button
        onClick={() => setMobileOpen(true)}
        className={`md:hidden fixed top-4 left-4 z-50 p-2 rounded-md shadow ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <FiMenu size={22} />
      </button>

      {/* Desktop Sidebar (always visible) */}
      <aside
        className={`${sidebarBg} hidden md:flex flex-col fixed top-0 left-0 h-full w-56 p-4 shadow-lg border-r ${borderColor} z-40`}
      >
        <div className="mb-6">
          <span className="text-2xl font-bold">🌍 Country</span>
          <div className="text-xs text-gray-400">Explorer</div>
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
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Sidebar panel */}
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`${sidebarBg} fixed top-0 left-0 h-full w-56 p-4 shadow-lg z-50 flex flex-col border-r ${borderColor}`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold">🌍 Country</span>
                  <div className="text-xs text-gray-400">Explorer</div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className={`p-1 rounded ${
                    theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100"
                  }`}
                >
                  ✕
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-2">
                <button
                  onClick={() => {
                    navigate("/");
                    setMobileOpen(false);
                  }}
                  className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium ${hoverBg}`}
                >
                  <FiHome className="text-lg" />
                  <span>Dashboard</span>
                </button>

                <button
                  onClick={() => {
                    setShowSettings((s) => !s);
                    setMobileOpen(false);
                  }}
                  className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium ${hoverBg}`}
                >
                  <FiSettings className="text-lg" />
                  <span>Settings</span>
                </button>

                <button
                  onClick={() => {
                    navigate("/about");
                    setMobileOpen(false);
                  }}
                  className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium ${hoverBg}`}
                >
                  <FiInfo className="text-lg" />
                  <span>About</span>
                </button>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Settings panel (right side) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: showSettings ? 0 : "100%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 right-0 h-full w-72 p-6 z-50 shadow-2xl ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Settings</h3>
        <div className="space-y-6">
          {/* <div>
            <div className="text-xs text-gray-400 mb-2">Theme</div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            >
              <span className="text-sm">
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </span>
              <div
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    theme === "dark" ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>
          </div> */}
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
