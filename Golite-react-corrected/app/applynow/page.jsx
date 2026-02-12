"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function ApplyNow() {

const [resume, setResume] = useState(null);
  const searchParams = useSearchParams();
  const positionFromURL = searchParams.get("position");
  const [position, setPosition] = useState("");

  useEffect(() => {
    if (positionFromURL) setPosition(positionFromURL);
  }, [positionFromURL]);

  return (

    <div className="bg-[#fff7f3] min-h-screen py-2 px-6">
            <Header/>
      <div className="max-w-5xl mx-auto">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Cell */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Cell Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Cell Number"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Position You're Applying For <span className="text-red-500">*</span>
            </label>
           <select
  value={position}
  onChange={(e) => setPosition(e.target.value)}
  className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-800 appearance-auto focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
>
              <option value="">Select Position</option>
              <option>Sales & Marketing</option>
              <option>Customer Support</option>
              <option>Technology & Development</option>
              <option>Operations & Management</option>
              <option>Business Development</option>
              <option>Field Sales</option>
            </select>
          </div>

          {/* Upload */}
<div className="md:col-span-2">
  <label className="block text-sm font-semibold mb-2 text-gray-800">
    Upload Resume
  </label>

  <label className="flex flex-col items-center justify-center w-full min-h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 bg-white p-4">

    {resume ? (
      <div className="flex flex-col items-center gap-2">
        <span className="text-green-600 font-medium text-sm">
          Successfully attached : {resume.name}
        </span>

        <button
          type="button"
          onClick={() => {
            setResume(null);
            document.getElementById("resumeInput").value = "";
          }}
          className="text-red-500 text-xs underline hover:text-red-600"
        >
          Remove attachment
        </button>
      </div>
    ) : (
      <span className="text-gray-500 text-sm">
        Click to upload your resume (PDF only)
      </span>
    )}

    <input
      id="resumeInput"
      type="file"
      accept=".pdf"
      className="hidden"
      onChange={(e) => setResume(e.target.files[0])}
    />
  </label>
</div>


          {/* Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-16 py-3 rounded-lg shadow-lg">
              Apply
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
