"use client";

import React from "react";
import { useGetApplications } from "@/hooks/applications";
import { IApplication } from "../../../../../../types/application";
import GridSkeleton from "@/components/common/grid-skeleton";
import ApplicantCard from "@/components/common/applicant-card";
import { useGetJob } from "@/hooks/jobs";
import { Skeleton } from "@/components/ui/skeleton";

function ApplicationsPage({ params }: { params: { id: string } }) {
  const jobId = params.id;
  const { data, isLoading, error } = useGetApplications(jobId);
  const { data: jobData, isLoading: jobLoading } = useGetJob(jobId);

  if (isLoading) return <GridSkeleton />;
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        No Applications found
      </div>
    );

  return (
    <div className="p-4">
      {jobLoading ? (
        <Skeleton className="w-96 h-10" />
      ) : (
        <h1 className="text-xl font-bold mb-4">
          Applications for {jobData?.job?.title}
        </h1>
      )}

      {data?.applications?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2">
          {data.applications.map((app: IApplication) => (
            <ApplicantCard {...app} key={app.id} />
          ))}
        </div>
      ) : (
        <p>No applications found for this job.</p>
      )}
    </div>
  );
}

export default ApplicationsPage;
