import React from "react";
import { useTheme } from "../context/ThemeContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`${
        isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
      } min-h-screen font-sans transition-colors duration-300`}
    >
      {/* ====== Header Section ====== */}
      <header className="w-full p-5">
        <Link
          to="/"
          className={`flex flex-row items-center mb-6 transition-colors duration-300 ${
            isDark
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-500"
          }`}
        >
          <IoMdArrowRoundBack className="w-7 h-7 mr-2" />
          <p className="text-lg font-medium">Back to Dashboard</p>
        </Link>

        <div className="max-w-4xl px-6">
          <p
            className={`${
              isDark ? "text-gray-400" : "text-gray-600"
            } font-semibold text-lg mb-2`}
          >
            Country Info Explorer
          </p>
          <h1
            className={` ${
              isDark ? "text-gray-100" : "text-gray-200"
            }text-5xl md:text-6xl font-extrabold leading-tight `}
          >
            Tentang Country Info Explorer
          </h1>
        </div>
      </header>

      {/* ====== Content Section ====== */}
      <section
        className={`grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x ${
          isDark ? "divide-gray-700" : "divide-gray-300"
        }`}
      >
        {/* Kiri - Tahukah Kamu */}
        <div
          className={`p-12 md:p-16 flex flex-col justify-between items-start ${
            isDark ? "bg-gray-900 text-white" : "bg-gray-700 text-white"
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Tahukah Kamu?
            </h2>
            <p className="mb-6 leading-relaxed">
              <span className="italic">Country Info Explorer</span> adalah
              aplikasi web yang memberikan akses terhadap berbagai informasi
              tentang negara di seluruh dunia — mulai dari populasi, bendera,
              hingga letak ibu kota. Aplikasi ini dibuat agar eksplorasi
              pengetahuan global menjadi lebih mudah dan menarik.
            </p>
            <div className="border-l-2 border-gray-500 pl-4 mb-6">
              <p className="italic text-gray-300">
                Temukan berbagai fakta menarik tentang dunia tempat kita hidup
                dan pelajari bagaimana setiap negara berperan dalam membentuk
                komunitas global.
              </p>
            </div>
          </div>

          <button
            className={`mt-4 w-fit px-6 py-3 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
              isDark
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            PELAJARI LEBIH LANJUT
          </button>
        </div>

        {/* Kanan - FAQ */}
        <div
          className={`p-12 md:p-16 flex flex-col justify-between items-start ${
            isDark ? "bg-gray-900 text-white" : "bg-gray-700 text-white"
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mb-6 leading-relaxed">
              Ingin tahu bagaimana{" "}
              <span className="italic">Country Info Explorer</span> mengumpulkan
              data atau cara menggunakan fitur-fiturnya? Bagian ini menjelaskan
              tujuan, metode, dan visi dari proyek ini — agar pengguna dapat
              menjelajah dengan percaya diri.
            </p>
            <div className="border-l-2 border-gray-500 pl-4 mb-6">
              <p className="italic text-gray-300">
                Semua data negara diambil dari API publik global dan sumber
                terbuka terpercaya untuk memastikan akurasi dan kemudahan akses
                bagi pengguna.
              </p>
            </div>
          </div>

          <button
            className={`mt-4 w-fit px-6 py-3 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
              isDark
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            EKSPLORASI
          </button>
        </div>
      </section>
    </div>
  );
}
