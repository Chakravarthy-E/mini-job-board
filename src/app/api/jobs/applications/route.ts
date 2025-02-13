import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const jobId = searchParams.get("id");

  if (!jobId) {
    return NextResponse.json(
      {
        error: "Job ID is required",
      },
      { status: 400 }
    );
  }
  try {
    const getApplications = await prisma.application.findMany({
      where: {
        jobId,
      },
    });

    return NextResponse.json(
      { applications: getApplications },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in getting jobs:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the jobs." },
      { status: 500 }
    );
  }
}
