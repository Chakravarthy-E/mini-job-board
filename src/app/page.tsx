import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="container mx-auto p-6 font-nunito">
      <h1 className="text-3xl font-bold mb-4">Welcome to Job Portal</h1>
      <p className="mb-4">Explore exciting job opportunities and apply now!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Candidate Dashboard */}
        <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            Candidate Dashboard
          </h2>
          <p className="text-gray-700 mb-4">
            Manage your job applications, track interview schedules, and update
            your profile.
          </p>
          <Link href="/candidate/jobs">
            <Button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
              Go to Candidate Dashboard
            </Button>
          </Link>
        </div>

        {/* Company Dashboard */}
        <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            Company Dashboard
          </h2>
          <p className="text-gray-700 mb-4">
            Post new job openings, review applications, and manage your
            company&apos;s profile.
          </p>
          <Link href="/company/jobs">
            <Button className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">
              Go to Company Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
