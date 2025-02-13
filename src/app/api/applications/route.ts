import prisma from "@/lib/prisma";
import { applicationSchema } from "@/validations/application.schema";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const applicationDetails = await request.json();
    const validation = applicationSchema.safeParse(applicationDetails);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Invalid application details provided",
          details: validation.error.errors,
        },
        { status: 400 }
      );
    }

    const newApplication = await prisma.application.create({
      data: {
        jobId: applicationDetails.jobId,
        email: applicationDetails.email,
        name: applicationDetails.name,
        resumeLink: applicationDetails.resumeLink,
        coverLetter: applicationDetails.coverLetter,
      },
    });

    return NextResponse.json(
      { message: "Application submitted successfully!", newApplication },
      { status: 201 }
    );
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        {
          error:
            "You have already applied for this job with the provided email.",
        },
        { status: 409 }
      );
    }

    console.error("Error creating application:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the application." },
      { status: 500 }
    );
  }
}
