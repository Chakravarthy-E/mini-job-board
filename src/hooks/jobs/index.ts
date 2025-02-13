"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useGetAllJobs() {
  return useQuery({
    queryKey: ["all-jobs"],
    queryFn: async () => {
      const response = await axios.get("/api/jobs");
      if (response.status !== 200) {
        throw new Error("Failed to fetching jobs, Please try again");
      }
      return response.data;
    },
    staleTime: 0,
  });
}

export function useGetJob(id: string | undefined) {
  return useQuery({
    queryKey: ["job", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("Job ID is missing");
      }

      try {
        const response = await axios.get(`/api/jobs/${id}`);

        if (response.status !== 200) {
          throw new Error("Failed to fetch job. Please try again.");
        }

        return response.data;
      } catch (error) {
        throw new Error("Error fetching job. Please try again", {
          cause: error,
        });
      }
    },
    staleTime: 0,
    enabled: !!id,
  });
}
export function useDeleteJob() {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-job", "all-jobs"],
    mutationFn: async (id: string | undefined) => {
      if (!id) {
        throw new Error("Job ID is missing");
      }

      try {
        const response = await axios.delete(`/api/jobs/${id}`);

        if (response.status !== 200) {
          throw new Error("Failed to delete job. Please try again.");
        }

        return response.data;
      } catch (error) {
        throw new Error("Error deleting job. Please try again", {
          cause: error,
        });
      }
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["all-jobs"] });
    },
  });
}
