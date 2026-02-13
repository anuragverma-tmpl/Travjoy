import { Skeleton } from "@/components/ui/skeleton";

const SinglePOISkeleton = () => {
  return (
    <div className="h-auto mt-[89px] flex flex-col w-full bg-white">
      <div className="px-3 sm:px-4 md:px-8 lg:pl-[60px] lg:pr-[65px]">

        {/* Breadcrumb */}
        <div className="flex gap-2 mt-4">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-28" />
        </div>

        {/* Gallery */}
        <div className="h-[425px] w-full mt-3">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>

        {/* Title + Tag */}
        <div className="mt-4 flex items-center gap-4">
          <Skeleton className="h-8 w-[300px]" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </div>

        {/* Rating + Location + Time */}
        <div className="flex gap-6 mt-3 flex-wrap">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-44 rounded-xl" />
        </div>

        {/* Description */}
        <div className="mt-5 space-y-3 max-w-[850px]">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[60%]" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[80%]" />
          <Skeleton className="h-4 w-[60%]" />
          <Skeleton className="h-4 w-[60%]" />
          <Skeleton className="h-4 w-[90%]" />
        </div>

        {/* Mobile Buttons */}
        <div className="lg:hidden flex flex-col gap-3 mt-6">
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>

        {/* Booking Card (mobile) */}
        <div className="lg mt-12">
          <Skeleton className="h-[220px] w-full rounded-xl" />
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:block absolute top-[600px] right-[65px] w-[300px] space-y-4">
          <Skeleton className="h-12 w-full rounded-lg" />
          <Skeleton className="h-[220px] w-full rounded-xl" />
          <Skeleton className="h-[150px] w-full rounded-xl" />
        </div>

        {/* Tour Cards */}
        <div className="flex flex-col gap-y-5 mt-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[140px] w-full rounded-xl" />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-10 space-y-4 mb-4">
          <Skeleton className="h-6 w-40" />
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-lg" />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SinglePOISkeleton;