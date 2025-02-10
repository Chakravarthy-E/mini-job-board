import { z } from "zod";

export const createJobSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be more than 3 characters" }),
  description: z
    .string()
    .min(3, { message: "Description should be more than 3 characters" }),
  category: z
    .string()
    .min(3, { message: "Category should be more than 3 characters" }),
  location: z
    .string()
    .min(3, { message: "Location should be more than 3 characters" }),
  salaryRange: z
    .string()
    .min(3, { message: "Salary Range should be more than 3 characters" }),
});

export type createJobType = z.infer<typeof createJobSchema>;
