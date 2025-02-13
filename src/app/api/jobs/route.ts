import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { createJobSchema } from "@/validations/job.schema";

export async function POST(request: Request) {
  try {
    const jobDetails = await request.json();

    const validation = createJobSchema.safeParse(jobDetails);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Invalid job details provided",
          details: validation.error.errors,
        },
        { status: 400 }
      );
    }

    const createJob = await prisma.job.create({
      data: {
        title: jobDetails.title,
        description: jobDetails.description,
        category: jobDetails.category,
        salaryRange: jobDetails.salaryRange,
        location: jobDetails.location,
      },
    });

    return NextResponse.json({ newJob: createJob }, { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the job." },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const getAllJobs = await prisma.job.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ jobs: getAllJobs }, { status: 200 });
  } catch (error) {
    console.error("Error in getting jobs:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the jobs." },
      { status: 500 }
    );
  }
}
