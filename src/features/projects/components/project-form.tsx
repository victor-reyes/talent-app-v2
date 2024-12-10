"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Input,
  Textarea,
  DialogContent,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components";
import { addProjectAction } from "../actions";
import { useToast } from "@/hooks/use-toast";
import { formSchema } from "../validation";

export default function ProjectForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted with values:", values);
    try {
      await addProjectAction({
        username: values.username,
        repository: values.repository,
        title: values.title,
        description: values.description,
        performance: values.performance,
      });
      toast({
        title: "Project added",
        description: "Project added successfully",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : String(error),
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="submit">Add project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add project</DialogTitle>
          <DialogDescription>
            Add a new project here. Click submit when you´re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  type="text"
                  {...form.register("username")}
                />
              </FormControl>
              <FormDescription>This is your Github username.</FormDescription>
              <FormMessage>
                {form.formState.errors.username?.message}
              </FormMessage>
            </FormItem>
            <FormItem>
              <FormLabel>Repository</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  type="text"
                  {...form.register("repository")}
                />
              </FormControl>
              <FormDescription>
                This is the repository link that you want to display.
              </FormDescription>
              <FormMessage>
                {form.formState.errors.repository?.message}
              </FormMessage>
            </FormItem>
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...form.register("title")} />
              </FormControl>
              <FormDescription>
                This is your Github repository title.
              </FormDescription>
              <FormMessage>{form.formState.errors.title?.message}</FormMessage>
            </FormItem>
            <FormItem>
              <FormLabel>Performance</FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  type="text"
                  {...form.register("performance")}
                />
              </FormControl>
              <FormDescription>
                The lighthouse performance of the project
              </FormDescription>
              <FormMessage>
                {form.formState.errors.performance?.message}
              </FormMessage>
            </FormItem>
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Placeholder"
                  className="resize-none"
                  {...form.register("description")}
                />
              </FormControl>
              <FormDescription>
                A brief description of your project.
              </FormDescription>
              <FormMessage>
                {form.formState.errors.description?.message}
              </FormMessage>
            </FormItem>
            <DialogFooter>
              <Button>Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
