"use client";

import { applicationType } from "@/validations/application.schema";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetApplications(id: string) {
  return useQuery({
    queryKey: ["applications", id],
    queryFn: async () => {
      if (!id) throw new Error("Job ID is required");

      const response = await axios.get(`/api/applications/${id}`);
      if (response.status !== 200) {
        throw new Error("Failed to fetch applications, please try again.");
      }
      return response.data;
    },
    enabled: !!id,
  });
}

export function useCreateNewApplications() {
  return useMutation({
    mutationKey: ["new-application"],
    mutationFn: async (applicationDetails: applicationType) => {
      if (!applicationDetails)
        throw new Error("Application details are required");

      const response = await axios.post(
        `/api/applications`,
        applicationDetails
      );
      if (response.status !== 201) {
        throw new Error("Failed to create application, please try again.");
      }
      return response.data;
    },
  });
}
