"use client";

import { trpc } from "@/app/_trpc/client";
import { UploadImage } from "@/components/UploadImage";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { InventoryItem } from "@/lib/validators/Inventory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const CreateInventoryItem = () => {
  const [imagesUploaded, setImagesUploaded] = useState<any[]>([]);
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: createItem } = trpc.createInventoryItem.useMutation({
    onSuccess: () => {
      console.log("Inventory item created successfully");
      toast({
        title: "Inventory item created successfully",
      });
      router.push("/admin/inventory");
    },
  });

  const form = useForm<z.infer<typeof InventoryItem>>({
    resolver: zodResolver(InventoryItem),
  });

  function onSubmit(values: z.infer<typeof InventoryItem>) {
    const data = {
      ...values,
      images: imagesUploaded,
    };
    createItem(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between">
          <p>New Product</p>
          <Button type="submit">Save Changes</Button>
        </div>
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
                        <SelectItem value="GADGETS">Gadgets</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="home-decor">Home Decor</SelectItem>
                        <SelectItem value="books">Books</SelectItem>
                        <SelectItem value="toys">Toys</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-2.5">
              <FormField
                control={form.control}
                name="sellingPrice"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input
                        placeholder="Selling Price"
                        type="number"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="costPrice"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input
                        placeholder="Cost Price"
                        type="number"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Stock" type="number" {...field} />
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
          <div className="flex gap-5">
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
                      imageIndexToRm={0}
                      form={form}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

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
                        imageIndexToRm={1}
                        form={form}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {imagesUploaded && imagesUploaded.length >= 2 ? (
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <UploadImage
                          onChange={() => alert("hi")}
                          imageSrc={imagesUploaded[2] ? imagesUploaded[2] : ""}
                          setImagesUploaded={setImagesUploaded}
                          imageIndexToRm={2}
                          form={form}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : (
                <div className="lg:h-40 lg:w-40 px-4 py-7 border border-dashed rounded-md" />
              )}
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default CreateInventoryItem;
