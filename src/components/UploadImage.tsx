import { FC, HTMLAttributes, useRef, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";
import Dropzone from "react-dropzone";
import Image from "next/image";
import { Progress } from "./ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";

const uploadImageVariants = cva("relative rounded-xl border  outline-none", {
  variants: {
    size: {
      default: "lg:h-40 lg:w-40 px-4 py-7",
      lg: "lg:h-[340px] w-96 px-4 py-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UploadImageProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof uploadImageVariants> {
  imageSrc?: string;
  setImagesUploaded: React.Dispatch<React.SetStateAction<string[]>>;
  imageIndexToRm: number;
  form: any;
}

const UploadImage: FC<UploadImageProps> = ({
  className,
  size,
  onChange,
  imageSrc,
  setImagesUploaded,
  imageIndexToRm,
  form,
  ...props
}) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const { startUpload } = useUploadThing("imageUploader");
  const { toast } = useToast();

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };

  if (imageSrc) {
    return (
      <div className={cn(uploadImageVariants({ size, className }), "relative")}>
        <div className="h-full flex items-center justify-center overflow-hidden">
          <Image alt="" src={imageSrc} width={200} height={100} />
          <Button
            variant="ghost"
            className="absolute top-1 right-0 hover:bg-transparent"
            onClick={() => {
              setImagesUploaded((prevUrls) => {
                const updatedUrls = [...prevUrls];
                updatedUrls[imageIndexToRm] = "";
                form.setValue("images", updatedUrls);
                return updatedUrls;
              });
              setUploadProgress(0);
              setIsUploading(false);
            }}
          >
            <Icons.trash />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Dropzone
      onDrop={async (acceptedFile: any) => {
        setIsUploading(true);
        const progressInterval = startSimulatedProgress();

        const res = await startUpload(acceptedFile);

        console.log({ res });

        if (!res) {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        const [fileResponse] = res;

        const newUrl = fileResponse?.url;

        if (!newUrl) {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        console.log("newUrl", newUrl);

        clearInterval(progressInterval);
        setUploadProgress(100);
        setImagesUploaded((prevUrls) => {
          form.setValue("images", [...prevUrls, newUrl]);
          return [...prevUrls, newUrl];
        });
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          className={cn(uploadImageVariants({ size, className }))}
          {...getRootProps()}
          {...props}
        >
          <div className="h-full w-full cursor-pointer flex flex-col items-center justify-center">
            <Icons.uploadDummy
              className={cn(size === "lg" ? "h-12 mb-6" : "h-6 mb-3")}
            />

            <div className="flex gap-3">
              <Icons.uploadCloud />
              <p className="text-sm text-brand-primary-100">Upload Image</p>
            </div>
            {size === "lg" && (
              <p className="text-brand-black-30 text-sm text-center mt-2.5">
                Upload a cover image for your product. File Format {""}
                <span className="text-brand-black-90">jpeg, png</span> {""}
                Recommened Size{" "}
                <span className="text-brand-black-90">4MB max.</span>
              </p>
            )}

            {isUploading ? (
              <div className="w-full mt-5 max-w-xs mx-auto">
                <Progress
                  value={uploadProgress}
                  className="h-1 w-full bg-zinc-200"
                />
              </div>
            ) : null}
          </div>

          <input {...getInputProps()} />
        </div>
      )}
    </Dropzone>
  );
};

export { UploadImage, uploadImageVariants };
