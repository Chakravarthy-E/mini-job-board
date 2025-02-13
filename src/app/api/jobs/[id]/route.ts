import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const jobId = params.id;
  if (!jobId) {
    return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
  }

  try {
    const getJob = await prisma.job.findUnique({
      where: { id: jobId },
    });

    if (!getJob) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ job: getJob }, { status: 200 });
  } catch (error) {
    console.error("Error in getting jobs:", error);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? error
            : "An error occurred while fetching the jobs.",
      },
      { status: 500 }
    );
  }
}
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const jobId = params.id;
  if (!jobId) {
    return NextResponse.json({ error: "Job ID is required" }, { status: 400 });
  }

  try {
    const deleteJob = await prisma.job.delete({
      where: { id: jobId },
    });

    if (!deleteJob) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ job: deleteJob }, { status: 200 });
  } catch (error) {
    console.error("Error in deleting job:", error);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? error
            : "An error occurred while deleting the job.",
      },
      { status: 500 }
    );
  }
}
