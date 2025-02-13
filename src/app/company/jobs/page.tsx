"use client";

import React from "react";
import { useGetAllJobs } from "@/hooks/jobs";
import JobCard from "@/components/common/job-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IJob } from "../../../../types/job";
import GridSkeleton from "@/components/common/grid-skeleton";

function Company() {
  const { data, isLoading } = useGetAllJobs();

  if (isLoading) return <GridSkeleton />;
  return (
    <>
      <div className="mx-auto p-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold mb-4 font-outfit">
            Company Job Board
          </h1>
          <Link href="/company/jobs/new">
            <Button className="font-liter capitalize" variant={"secondary"}>
              Create New Job
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2">
          {data?.jobs.map((job: IJob) => (
            <div key={job.id} className="relative">
              <JobCard job={job} userType="company" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Company;
