"use client";

import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { UploadButton } from "@/lib/uploadthing";

import { Icons } from "./Icons";

import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";

const uploadImageVariants = cva("relative rounded-xl border  outline-none", {
  variants: {
    size: {
      default: "lg:h-40 lg:w-40 px-4",
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
  imagesUploaded: string[];
  imageIndexToRm: number;
  form: any;
}

const UploadImage: FC<UploadImageProps> = ({
  className,
  size,
  onChange,
  imageSrc,
  setImagesUploaded,
  imagesUploaded,
  imageIndexToRm,
  form,
  ...props
}) => {
  const { toast } = useToast();

  const handleDeleteImage = () => {
    setImagesUploaded((prevUrls) => {
      const updatedUrls = [...prevUrls];
      updatedUrls.splice(imageIndexToRm, 1);
      return updatedUrls;
    });
  };

  if (imageSrc && imageSrc !== "") {
    return (
      <div className={cn(uploadImageVariants({ size, className }), "relative")}>
        <div className="h-full flex items-center justify-center overflow-hidden p-2">
          <Image
            alt="product-image-view"
            src={imageSrc}
            fill
            className={cn(size === "lg" ? "p-10" : "p-5")}
          />
          <Button
            variant="ghost"
            className="absolute top-1 right-0 hover:bg-transparent"
            onClick={handleDeleteImage}
          >
            <Icons.trash />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(uploadImageVariants({ size, className }))} {...props}>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <Icons.uploadDummy className={cn(size === "lg" ? "h-12" : "h-6")} />

          <UploadButton
            className={cn(
              "mt-4 ut-button:text-primary-foreground ut-button:bg-primary ut-button:ut-uploading:bg-primary/50 ut-button:ut-readying:bg-green-500",
              size === "lg" ? "" : "ut-button:w-[95px]"
            )}
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              const newUrl = res[0].url;

              if (newUrl) {
                setImagesUploaded((prevUrls) => {
                  form.setValue("images", [...prevUrls, newUrl]);
                  return [...prevUrls, newUrl];
                });
              }

              toast({
                title: "Image uploaded successfully",
              });
            }}
            onUploadError={(error: Error) => {
              toast({
                title: "Failed to upload file",
                description: "Please try again later",
                variant: "destructive",
              });
              console.error("Error while uploading image", error);
            }}
          />
        </div>
        {size === "lg" && (
          <p className="text-brand-black-30 text-sm text-center mt-2.5">
            Upload a cover image for your product. File Format {""}
            <span className="text-brand-black-90">jpeg, png</span> {""}
            Recommened Size{" "}
            <span className="text-brand-black-90">4MB max.</span>
          </p>
        )}
      </div>
    </div>
  );
};

export { UploadImage, uploadImageVariants };
