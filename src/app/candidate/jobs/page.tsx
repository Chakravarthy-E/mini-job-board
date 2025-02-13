"use client";

import React, { useState } from "react";
import { useGetAllJobs } from "@/hooks/jobs";
import { IJob } from "../../../../types/job";
import JobCard from "@/components/common/job-card";
import GridSkeleton from "@/components/common/grid-skeleton";
import JobFilters from "@/components/common/job-filters";
import JobSearch from "@/components/common/job-search";

function CandidatePage() {
  const { data, isLoading } = useGetAllJobs();
  const [filteredJobs, setFilteredJobs] = useState<IJob[]>([]);

  const handleFilter = (filters: any) => {
    const filtered = data?.jobs.filter((job: IJob) => {
      const matchesCategory = filters.category
        ? job.category === filters.category
        : true;
      const matchesLocation = filters.location
        ? job.location.includes(filters.location)
        : true;
      const matchesSalary = filters.salaryRange
        ? job.salaryRange === filters.salaryRange
        : true;
      return matchesCategory && matchesLocation && matchesSalary;
    });
    setFilteredJobs(filtered);
  };

  const handleSearch = (query: string) => {
    const searchedJobs = data?.jobs.filter(
      (job: IJob) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(searchedJobs);
  };

  if (isLoading) {
    return <GridSkeleton />;
  }
  return (
    <div className="mx-auto p-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold mb-4 font-outfit">All Jobs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <JobFilters onFilterChange={handleFilter} />
        <JobSearch onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2 my-2">
        {(filteredJobs.length ? filteredJobs : data?.jobs).map((job: IJob) => (
          <div key={job.id} className="relative">
            <JobCard job={job} userType="candidate" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CandidatePage;
