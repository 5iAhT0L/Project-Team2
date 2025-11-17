import { Search } from "lucide-react";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="relative w-full flex justify-start">

      {/* DESKTOP MODE */}
      <div
        className="
          hidden md:flex items-center rounded-full border border-white/20
          bg-white/5 backdrop-blur-sm transition-all duration-300
          hover:w-96 focus-within:w-96 w-14 overflow-hidden
        "
      >
        <Search className="w-5 h-5 ml-3 text-white/70" />

        <input
          type="text"
          placeholder="Search countries, e.g. Indonesia"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            bg-transparent text-white outline-none px-1 mx-2 py-2 w-full
            placeholder-white/50
          "
        />
      </div>


      {/* MOBILE MODE (always expanded input) */}
      <div
        className="
          flex md:hidden items-center rounded-full border border-white/20
          bg-white/5 backdrop-blur-sm transition-all duration-300
          w-50 overflow-hidden
        "
      >
        <Search className="w-5 h-5 ml-3 text-white/70" />

        <input
          autoFocus
          type="text"
          placeholder="Search countries..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent text-white outline-none px-3 py-2 w-full placeholder-white/50"
        />
      </div>

    </div>
  );
}
