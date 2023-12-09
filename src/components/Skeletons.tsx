import { Skeleton } from "./ui/skeleton";

export const TableDataSkeleton = () => {
  return (
    <div>
      <div className="py-4">
        <Skeleton className="h-10 max-w-sm" />
      </div>
      <div className="flex flex-col gap-2.5">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Skeleton className="h-9 w-20" />
        <Skeleton className="h-9 w-14" />
      </div>
    </div>
  );
};
