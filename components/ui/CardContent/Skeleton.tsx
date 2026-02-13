import { Card } from "../card";
import { Skeleton } from "@/components/ui/skeleton";

const Skeletonloading = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => {
        return (
          <Card key={index} className="w-full max-w-xs p-2 gap-y-5 rounded-xl">
            <Skeleton className="aspect-video w-full rounded-xl" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 m-0 p-0 w-full" />
            <Skeleton className="h-4 w-full" />
          </Card>
        );
      })}
    </>
  );
};

export default Skeletonloading;
