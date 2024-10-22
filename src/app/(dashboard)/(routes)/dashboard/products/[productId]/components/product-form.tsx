"use client";

import { createProduct } from "@/actions/products/create-product";
import { updateProduct } from "@/actions/products/update-product";
import { UploadImage } from "@/components/UploadImage";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { InventoryItem } from "@/lib/validators/Inventory";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface ProductFormProps {
  initialData: Product | null | undefined;
  categories: Category[];
}

const ProductForm = ({ initialData, categories }: ProductFormProps) => {
  const [imagesUploaded, setImagesUploaded] = useState<any[]>(
    initialData?.images.length ? initialData?.images : []
  );
  const { toast } = useToast();
  const router = useRouter();
  const title = initialData ? "Edit Product" : "Create Product";
  const action = initialData ? "Save Changes" : "Create";
  const toastMessage = initialData
    ? "Product updated successfully"
    : "Product created successfully";

  const form = useForm<z.infer<typeof InventoryItem>>({
    resolver: zodResolver(InventoryItem),
    defaultValues: {
      ...initialData,
      category: initialData?.categoryId || "",
    },
  });

  function onSubmit(values: z.infer<typeof InventoryItem>) {
    const data = {
      ...values,
      images: imagesUploaded,
    };

    if (initialData) {
      updateProduct(initialData)
        .then((updatedProduct) => {
          if (updatedProduct?.success) {
            router.push("/dashboard/products");
            toast({ title: toastMessage });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      createProduct(data)
        .then((product) => {
          if (product?.success) {
            router.push("/dashboard/products");
            toast({ title: toastMessage });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between">
          <Heading title={title} />
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-5  h-full w-2/3 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Product Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {categories?.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Price" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Stock" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Description." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-5 justify-end">
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <UploadImage
                      onChange={() => alert("hi")}
                      size="lg"
                      imageSrc={imagesUploaded[0] ? imagesUploaded[0] : ""}
                      setImagesUploaded={setImagesUploaded}
                      imagesUploaded={imagesUploaded}
                      imageIndexToRm={0}
                      form={form}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {imagesUploaded?.length >= 1 && (
              <div className="flex flex-col gap-5">
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <UploadImage
                          onChange={() => alert("hi")}
                          imageSrc={imagesUploaded[1] ? imagesUploaded[1] : ""}
                          setImagesUploaded={setImagesUploaded}
                          imagesUploaded={imagesUploaded}
                          imageIndexToRm={1}
                          form={form}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {imagesUploaded?.length >= 2 && (
                  <FormField
                    control={form.control}
                    name="images"
                    render={() => (
                      <FormItem>
                        <FormControl>
                          <UploadImage
                            onChange={() => alert("hi")}
                            imageSrc={
                              imagesUploaded[2] ? imagesUploaded[2] : ""
                            }
                            setImagesUploaded={setImagesUploaded}
                            imagesUploaded={imagesUploaded}
                            imageIndexToRm={2}
                            form={form}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <Button type="submit">{action}</Button>
      </form>
    </Form>
  );
};

export default ProductForm;
