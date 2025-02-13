"use client";

import { createJobType } from "@/validations/job.schema";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function useCreateNewJob() {
  return useMutation({
    mutationKey: ["new-job"],
    mutationFn: async (jobDetails: createJobType) => {
      if (!jobDetails) {
        throw new Error(`Please provide required job details`);
      }

      const response = await axios.post("/api/jobs", jobDetails);
      if (response.status !== 201) {
        throw new Error("Failed to create job, Please try again");
      }
      return response.data;
    },
  });
}
