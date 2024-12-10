"use client";

import { Pencil } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  FormDescription,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Project } from "../types";
import { updateAction, deleteAction } from "../actions";
import { toast } from "@/hooks/use-toast";

type Props = {
  project: Project;
};

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export default function EditProjectDetails({ project }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: project.title,
      description: project.description,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedProject = {
      description: values.description,
      title: values.title,
      id: project.id,
    };

    try {
      await updateAction(updatedProject);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  async function deleteProject() {
    const confirmed = confirm("Are you sure you want to delete this project?");
    if (confirmed) {
      try {
        await deleteAction(project.id);
        toast({
          title: "Project deleted",
          description: "Project deleted successfully",
        });
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: error instanceof Error ? error.message : String(error),
        });
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil type="submit" size={16} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit project</DialogTitle>
          <DialogDescription>
            Make changes to your project here. Click save when you´re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input type="text" {...form.register("title")} />
              </FormControl>
              <FormDescription>
                This is your Github repository title.
              </FormDescription>
              <FormMessage>{form.formState.errors.title?.message}</FormMessage>
            </FormItem>
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
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
              <div className="flex gap-6 justify-end">
                <Button onClick={deleteProject}>Delete</Button>
                <Button onClick={form.handleSubmit(onSubmit)}>Save</Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
