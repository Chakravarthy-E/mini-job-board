"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useCreateNewJob } from "@/hooks/company";
import { createJobSchema, createJobType } from "@/validations/job.schema";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

function CreateNewJob() {
  const router = useRouter();
  const form = useForm<createJobType>({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      location: "",
      salaryRange: "",
    },
  });
  const { mutate: createNewJobMutate, isPending } = useCreateNewJob();

  const onSubmit = async (values: createJobType) => {
    toast.loading("Creating new job...", {
      id: "new-job",
    });
    createNewJobMutate(values, {
      onSuccess: () => {
        toast.success("Job created successfully", {
          id: "new-job",
        });
        router.push("/company/jobs");
      },
      onError: (err) => {
        toast.error(err.message || "Failed to create job");
      },
    });
  };

  return (
    <div className="container mx-auto  px-10 py-10 font-liter">
      <h1 className="text-2xl font-bold mb-4">Create A New Job</h1>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="title">Title</FormLabel>
                <FormControl>
                  <Input id="title" placeholder="Enter the title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="description">Description</FormLabel>
                <FormControl>
                  <Textarea
                    id="description"
                    placeholder="Enter the description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="category">Category</FormLabel>
                <FormControl>
                  <Input
                    id="category"
                    placeholder="Enter the Category"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="location">Location</FormLabel>
                <FormControl>
                  <Input
                    id="location"
                    placeholder="Enter the location"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salaryRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="salaryRange">Salary</FormLabel>
                <FormControl>
                  <Input
                    id="salaryRange"
                    placeholder="Enter the salary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {isPending ? "Creating..." : "Create Post"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CreateNewJob;
