"use client";

import { trpc } from "@/app/_trpc/client";
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
import { InventoryItem } from "@/lib/validators/Inventory";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const CreateInventoryItem = () => {
  const { mutate: createItem } = trpc.createInventoryItem.useMutation({
    onSuccess: () => {
      console.log("Inventory item created successfully");
    },
  });

  const form = useForm<z.infer<typeof InventoryItem>>({
    resolver: zodResolver(InventoryItem),
  });

  function onSubmit(values: z.infer<typeof InventoryItem>) {
    createItem(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between">
          <p>New Product</p>
          <Button type="submit">Save Changes</Button>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
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
          <div className="border justify-center flex items-center">
            Upload Photo
          </div>
        </div>
      </form>
    </Form>
  );
};

export default CreateInventoryItem;
