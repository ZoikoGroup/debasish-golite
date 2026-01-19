"use client";

import { useSearchParams } from "next/navigation";
import jobsData from "../Sdata/jobsData";

export default function JobsPage() {
  const searchParams = useSearchParams();

  const query = searchParams.get("q")?.toLowerCase() || "";
  const location = searchParams.get("location")?.toLowerCase() || "";

  // ✅ FILTER DIRECTLY (NO useEffect, NO state)
  const filteredJobs = jobsData.filter((job) => {
    const matchQuery =
      !query ||
      job.title.toLowerCase().includes(query) ||
      job.technologies.some((tech) =>
        tech.toLowerCase().includes(query)
      );

    const matchLocation =
      !location || job.location.toLowerCase() === location;

    return matchQuery && matchLocation;
  });

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
        Job Openings
      </h1>

      <p className="text-3xl font-bold text-gray-900 text-center mb-10">
        Showing{" "}
        <span className="font-semibold text-orange-500">
          {query || "All Roles"}
        </span>
        {location && (
          <>
            {" "}in{" "}
            <span className="capitalize font-semibold text-orange-500">
              {location}
            </span>
          </>
        )}
      </p>

      {filteredJobs.length === 0 && (
        <p className="text-center text-gray-500">
          No jobs found for your selection.
        </p>
      )}

      <ul className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <li
            key={job.id}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {job.title}
            </h3>

            <p className="text-sm text-gray-600 mt-1 capitalize">
              {job.location}
            </p>

            <p className="mt-3 text-sm text-gray-700">
              {job.shortDescription}
            </p>

            <p className="mt-2 text-sm text-gray-600">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button className="mt-5 w-full py-2 border border-orange-400 text-orange-500 rounded-lg hover:bg-orange-50">
              Apply Now
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
