"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  applicationSchema,
  applicationType,
} from "@/validations/application.schema";
import { toast } from "sonner";
import { useCreateNewApplications } from "@/hooks/applications";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function CreateApplication() {
  const params = useParams();
  const jobId = params?.id as string;
  const router = useRouter();
  const form = useForm<applicationType>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      jobId: jobId ?? "",
      name: "",
      coverLetter: "",
      email: "",
      resumeLink: "",
    },
  });

  const { mutate: createNewApplicationMutate, isPending } =
    useCreateNewApplications();

  const onSubmit = async (values: applicationType) => {
    toast.loading("Applying...", {
      id: "apply-job",
    });
    createNewApplicationMutate(values, {
      onSuccess: () => {
        toast.success("Application submitted successfully", {
          id: "apply-job",
        });
        router.push("/candidate/jobs");
        form.reset();
      },
      onError: (err: { message: string | string[] }) => {
        const errorMessage = Array.isArray(err.message)
          ? err.message[0]
          : err.message || "Failed to apply. Please try again later.";

        toast.error(errorMessage, {
          id: "apply-job",
        });
        toast.dismiss();
      },
    });
  };
  return (
    <div className="container mx-auto  px-10 py-10 font-liter">
      <h1 className="text-2xl font-bold mb-4">Application</h1>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="jobId"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="jobId">Job ID</FormLabel>
                <FormControl>
                  <Input
                    id="jobId"
                    placeholder="Enter the jobId"
                    {...field}
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormControl>
                  <Input id="name" placeholder="Enter the name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input id="email" placeholder="Enter the Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resumeLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="resume">Resume Link</FormLabel>
                <FormControl>
                  <Input
                    id="resume"
                    placeholder="Enter the resume link"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="cover letter">Cover Letter</FormLabel>
                <FormControl>
                  <Textarea
                    id="cover letter"
                    placeholder="Enter the Cover Letter"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CreateApplication;
