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
        repository: values.repository,
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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="devUser42"
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
                  placeholder="https://github.com/devUser42/project-tracker"
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
                <Input
                  placeholder="Project Tracker"
                  type="text"
                  {...form.register("title")}
                />
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
                  placeholder="92"
                  type="text"
                  {...form.register("performance")}
                />
              </FormControl>
              <FormDescription>
                The lighthouse performance of the project. Enter a number
                between 0 and 100.
              </FormDescription>
              <FormMessage>
                {form.formState.errors.performance?.message}
              </FormMessage>
            </FormItem>
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A comprehensive tool for tracking project milestones and tasks."
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
