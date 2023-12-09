import { cn } from "@/lib/utils";

const TileLabel = ({
  title,
  amount,
  position = "bottom",
}: {
  title: string;
  amount: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label ",
        {
          "lg:px-20 lg:pb-[35%]": position === "center",
        }
      )}
    >
      <div className="flex items-center rounded-full border p-1 text-xs font-semibold backdrop-blur-md border-zinc-700 bg-black/70 ">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
          {title}
        </h3>
        <div className="flex-none rounded-full bg-green-500 p-2">
          €{amount} EUR
        </div>
      </div>
    </div>
  );
};

export default TileLabel;
