import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* ====== Header Section ====== */}
      <header className="w-full bg-black border-b border-gray-800 py-24 ">
        <div className="max-w-4xl px-6">
          <p className="text-red-500 font-semibold text-lg mb-2">
            Country Info Explorer
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Tentang Country Info Explorer
          </h1>
        </div>
      </header>

      {/* ====== Content Section ====== */}
      <section className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300 bg-gray-800 text-white">
        {/* Kiri - Tahukah Kamu */}
        <div className="p-12 md:p-16">
          <h2 className="text-3xl font-bold mb-6">Tahukah Kamu?</h2>
          <p className="text-white mb-6 leading-relaxed">
            <span className="italic">Country Info Explorer</span> adalah
            aplikasi web yang memberikan akses terhadap berbagai informasi
            tentang negara di seluruh dunia — mulai dari populasi, bendera,
            hingga letak ibu kota. Aplikasi ini dibuat agar eksplorasi
            pengetahuan global menjadi lebih mudah dan menarik.
          </p>
          <div className="border-l-2 border-gray-400 pl-4 mb-6">
            <p className="text-white italic">
              Temukan berbagai fakta menarik tentang dunia tempat kita hidup dan
              pelajari bagaimana setiap negara berperan dalam membentuk
              komunitas global.
            </p>
          </div>
          <button className="border border-black px-5 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-200 text-red-500">
            PELAJARI LEBIH LANJUT
          </button>
        </div>

        {/* Kanan - FAQ */}
        <div className="p-12 md:p-16">
          <h2 className="text-3xl font-bold mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-white mb-6 leading-relaxed">
            Ingin tahu bagaimana{" "}
            <span className="italic">Country Info Explorer</span> mengumpulkan
            data atau cara menggunakan fitur-fiturnya? Bagian ini menjelaskan
            tujuan, metode, dan visi dari proyek ini — agar pengguna dapat
            menjelajah dengan percaya diri.
          </p>
          <div className="border-l-2 border-gray-400 pl-4 mb-6">
            <p className="text-white italic">
              Semua data negara diambil dari API publik global dan sumber
              terbuka terpercaya untuk memastikan akurasi dan kemudahan akses
              bagi pengguna.
            </p>
          </div>
          <button className="border border-black px-5 py-2 font-semibold hover:bg-black hover:text-white transition-all duration-200 text-red-500">
            EKSPLORASI
          </button>
        </div>
      </section>
    </div>
  );
}
