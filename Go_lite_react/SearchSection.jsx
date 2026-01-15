"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const enableLiveSearch = query.trim().length > 0;

  // 🔥 LIVE SEARCH (suggestions only)
  useEffect(() => {
    if (!enableLiveSearch) {
      setResults([]);
      return;
    }

    const delay = setTimeout(async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/data/jobs.json");
        const jobs = await response.json();

        const filteredJobs = jobs.filter((job) => {
          const matchQuery =
            job.title.toLowerCase().includes(query.toLowerCase()) ||
            job.technologies.some((tech) =>
              tech.toLowerCase().includes(query.toLowerCase())
            );

          const matchLocation =
            !location || job.location.toLowerCase() === location;

          return matchQuery && matchLocation;
        });

        setResults(filteredJobs);
      } catch (err) {
        setError("Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [query, location]);

  // 🔍 FINAL SEARCH (Button)
  function handleSearch() {
    const params = new URLSearchParams();

    if (query.trim()) params.append("q", query.trim());
    if (location) params.append("location", location);

    router.push(`/jobs?${params.toString()}`);
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Check out our Open Positions to see where you fit in
      </h2>

      {/* SEARCH CONTROLS */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Job title or technology (React, Java, etc.)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-base sm:text-lg text-gray-900 flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="text-base sm:text-lg text-gray-900 flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value="">All Locations</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="chandigarh">Chandigarh</option>
          <option value="bangalore">Bangalore</option>
        </select>

        <button
          onClick={handleSearch}
          className="px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
        >
          Search Jobs
        </button>
      </div>

      {/* LIVE RESULTS */}
      {enableLiveSearch && (
        <div className="max-w-4xl mx-auto mt-12">
          {loading && (
            <p className="text-center text-gray-500">Loading...</p>
          )}

          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}

          {!loading && results.length === 0 && (
            <p className="text-center text-gray-500">
              No jobs found matching your search
            </p>
          )}

          <ul className="grid sm:grid-cols-2 gap-6">
            {results.map((job) => (
              <li
                key={job.id}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {job.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1 capitalize">
                  📍 {job.location}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {job.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
