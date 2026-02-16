"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function ApplyNow() {
  // ✅ All hooks must be inside component
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [position, setPosition] = useState("");

  const searchParams = useSearchParams();
  const positionFromURL = searchParams.get("position");

  useEffect(() => {
    if (positionFromURL) setPosition(positionFromURL);
  }, [positionFromURL]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position", position);

    if (resume) {
      formData.append("resume", resume);
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/admin/careers/jobapplication/", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#fff7f3] min-h-screen py-2 px-6">
      <Header />
      <div className="max-w-5xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Cell */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Cell Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Position You're Applying For{" "}
              <span className="text-red-500">*</span>
            </label>
         <select
  value={position}
  onChange={(e) => setPosition(e.target.value)}
  className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
>
  <option value="">Select Position</option>
  <option value="sales_marketing">Sales & Marketing</option>
  <option value="customer_support">Customer Support</option>
  <option value="technology_dev">Technology & Development</option>
  <option value="operations_mgmt">Operations & Management</option>
  <option value="business_dev">Business Development</option>
  <option value="field_sales">Field Sales</option>
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
                    onClick={() => setResume(null)}
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
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) =>
                  setResume(e.target.files ? e.target.files[0] : null)
                }
              />
            </label>
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-16 py-3 rounded-lg shadow-lg"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}