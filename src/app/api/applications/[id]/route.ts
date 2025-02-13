import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(req: Request, { params }: Props) {
  const idSchema = z.string().min(1);
  const idValidation = idSchema.safeParse(params.id);

  if (!idValidation.success) {
    return NextResponse.json({ error: "Invalid job ID" }, { status: 400 });
  }

  const jobId = params.id;

  try {
    const getApplications = await prisma.application.findMany({
      where: { jobId },
      orderBy: {
        submittedAt: "desc",
      },
    });

    if (!getApplications.length) {
      return NextResponse.json(
        { error: "No applications found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ applications: getApplications });
  } catch (error) {
    console.error("Error in getting applications:", error);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? String(error)
            : "An error occurred while fetching the applications.",
      },
      { status: 500 }
    );
  }
}
