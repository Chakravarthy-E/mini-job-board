import React from "react";
import { IJobCard } from "../../../../types/job";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function JobCard({ job, userType }: IJobCard) {
  return (
    <>
      <Card className="w-full max-w-md mx-auto shadow-lg rounded-2xl p-5 font-nunito">
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
            <Badge variant="secondary" className="capitalize">
              {job.category}
            </Badge>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span>{job.salaryRange}</span>
          </div>

          <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <Calendar className="h-4 w-4" />
              <span>{new Date(job.createdAt).toLocaleDateString()}</span>
            </div>

            {userType === "company" ? (
              <div className="flex items-center gap-2">
                <Link href={`/company/jobs/${job.id}/applications`}>
                  <Button variant="outline">Applications</Button>
                </Link>
              </div>
            ) : (
              <Link href={`/candidate/jobs/${job.id}`}>
                <Button>Apply Now</Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default JobCard;
