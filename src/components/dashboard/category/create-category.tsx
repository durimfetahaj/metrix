"use client";

import { trpc } from "@/app/_trpc/client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { categorySchema } from "@/lib/validators/category";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const CreateCategory = () => {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: createItem, isLoading } = trpc.createCategory.useMutation({
    onSuccess: () => {
      console.log("Inventory item created successfully");
      toast({
        title: "Inventory item created successfully",
      });
      router.push("/dashboard/categories");
    },
  });

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
  });

  function onSubmit(values: z.infer<typeof categorySchema>) {
    createItem(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between">
          <p>New Category</p>
          <Button disabled={isLoading} type="submit">
            Save Changes
          </Button>
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
          </div>
        </div>
      </form>
    </Form>
  );
};

export default CreateCategory;
