import { cn } from "@/lib/utils";
import Image from "next/image";
import TileLabel from "../TileLabel";

const GridTileImage = ({
  isInteractive = true,
  label,
  ...props
}: {
  isInteractive?: boolean;
  label?: {
    title: string;
    amount: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) => {
  return (
    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border hover:border-primary border-zinc-800">
      {props.src ? (
        <Image
          className={cn("relative h-full w-full object-contain p-6", {
            "transition duration-300 ease-in-out group-hover:scale-105":
              isInteractive,
          })}
          {...props}
          quality={100}
        />
      ) : null}
      {label ? (
        <TileLabel
          title={label.title}
          amount={label.amount}
          position={label.position}
        />
      ) : null}
    </div>
  );
};

export default GridTileImage;
