import React from "react";
import { IApplication } from "../../../../types/application";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

function ApplicantCard({ email, name, submittedAt }: IApplication) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg rounded-2xl p-5 font-nunito">
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>{email}</span>
        </div>

        <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{new Date(submittedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ApplicantCard;
