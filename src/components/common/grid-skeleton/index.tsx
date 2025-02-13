import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2 mx-10 my-10">
      <Skeleton className="w-full max-w-md mx-auto h-52" />
      <Skeleton className="w-full max-w-md mx-auto h-52" />
      <Skeleton className="w-full max-w-md mx-auto h-52" />
    </div>
  );
}

export default GridSkeleton;
