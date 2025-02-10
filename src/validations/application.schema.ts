import { z } from "zod";

export const applicationSchema = z.object({
  jobId: z.string({ message: "Job ID is required" }),
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name should be more than 3 characters" }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Enter a valid email" }),
  resumeLink: z
    .string({ message: "Resume link is required" })
    .trim()
    .url({ message: "Invalid URL" }),
  coverLetter: z.optional(
    z
      .string()
      .min(200, { message: "Cover letter should be more than 200 characters" })
  ),
});

export type applicationType = z.infer<typeof applicationSchema>;
