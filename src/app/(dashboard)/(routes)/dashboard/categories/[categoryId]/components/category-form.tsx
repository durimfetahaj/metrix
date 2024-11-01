"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Category } from "@prisma/client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { createCategory } from "@/actions/categories/create-category";
import { updateCategory } from "@/actions/categories/update-category";

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
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { categorySchema } from "@/lib/validators/category";

interface CategoryFormProps {
  initialData: Category | null;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ initialData }) => {
  const { toast } = useToast();
  const router = useRouter();

  const title = initialData ? "Edit Category" : "Create Category";
  const action = initialData ? "Save Changes" : "Create";
  const toastMessage = initialData
    ? "Category updated successfully"
    : "Category created successfully";

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: initialData?.name || "",
    },
  });

  function onSubmit(values: z.infer<typeof categorySchema>) {
    if (initialData) {
      const updatedValues = {
        id: initialData?.id,
        ...values,
      };
      updateCategory(updatedValues)
        .then((category) => {
          if (category?.success) {
            router.push("/dashboard/categories");
            toast({ title: toastMessage });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      createCategory(values)
        .then((category) => {
          if (category?.success) {
            router.push("/dashboard/categories");
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
          </div>
        </div>
        <Button type="submit">{action}</Button>
      </form>
    </Form>
  );
};

export default CategoryForm;
