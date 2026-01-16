"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function JobsPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q") || "";
  const location = searchParams.get("location") || "";

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const res = await fetch("/data/jobs.json");
        const data = await res.json();

        const filteredJobs = data.filter((job) => {
          const matchQuery =
            !query ||
            job.title.toLowerCase().includes(query.toLowerCase()) ||
            job.technologies.some((tech) =>
              tech.toLowerCase().includes(query.toLowerCase())
            );

          const matchLocation =
            !location || job.location === location;

          return matchQuery && matchLocation;
        });

        setJobs(filteredJobs);
      } catch {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [query, location]);

  return (
    <section className="py-20 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Job Openings
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Showing results for{" "}
        <span className="font-semibold text-orange-500">
          {query || "All Roles"}
        </span>
        {location && (
          <>
            {" "}in{" "}
            <span className="font-semibold text-orange-500 capitalize">
              {location}
            </span>
          </>
        )}
      </p>

      {loading && (
        <p className="text-center text-gray-500">Loading jobs...</p>
      )}

      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {!loading && jobs.length === 0 && (
        <p className="text-center text-gray-500">
          No jobs found for your selection.
        </p>
      )}

      <ul className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
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

            {/* No login restriction */}
            <button
              type="button"
              className="mt-5 w-full py-2 border border-orange-400 text-orange-500 rounded-lg hover:bg-orange-50 transition"
            >
              Apply Now
            </button>

            <p className="text-xs text-gray-400 text-center mt-2">
              Login required only during application
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
