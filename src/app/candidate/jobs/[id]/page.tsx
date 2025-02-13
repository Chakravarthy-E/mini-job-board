"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGetJob } from "@/hooks/jobs";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function JobPage() {
  const params = useParams();
  const jobId = params?.id as string;
  const { data, isLoading, error } = useGetJob(jobId ?? "");

  if (isLoading) {
    return <Skeleton className="max-w-4xl mx-auto p-6 min-h-screen my-3" />;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error.message}</p>;
  }

  const job = data?.job;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-4">{job?.title}</h1>
        <p className="text-gray-600 mb-2">Category: {job?.category}</p>
        <p className="text-gray-600 mb-2">Location: {job?.location}</p>
        <p className="text-gray-600 mb-2">Salary Range: {job?.salaryRange}</p>
        <p className="text-gray-500 mb-4">
          Posted on: {new Date(job?.createdAt).toLocaleDateString()}
        </p>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-3">Job Description</h2>
          <p className="text-gray-700 whitespace-pre-line mb-4">
            {job?.description}
          </p>
        </CardContent>
        <CardFooter>
          <Link href={`/candidate/apply/${job.id}`}>
            <Button>Apply</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default JobPage;
