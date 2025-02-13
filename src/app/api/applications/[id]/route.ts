import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const jobId = params.id;
  if (!jobId) {
    return NextResponse.json({ error: "Job Id is required" }, { status: 400 });
  }

  try {
    const getApplications = await prisma.application.findMany({
      where: { jobId: jobId },
      orderBy: {
        submittedAt: "desc",
      },
    });

    if (getApplications.length < 1) {
      return NextResponse.json(
        { error: "No applications found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { applications: getApplications },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in getting applications:", error);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? error
            : "An error occurred while fetching the applications.",
      },
      { status: 500 }
    );
  }
}
