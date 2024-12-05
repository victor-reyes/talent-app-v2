"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addProjectAction } from "../action";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  username: z.string().nonempty({ message: "Username is required" }),
  repository: z.string().nonempty({ message: "Repository is required" }),
  performance: z.string().nonempty({ message: "Performance is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
});

export default function ProjectForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted with values:", values);
    try {
      await addProjectAction(
        values.username,
        values.repository,
        values.description,
        values.performance
      );
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="" type="text" {...form.register("username")} />
          </FormControl>
          <FormDescription>This is your Github username.</FormDescription>
          <FormMessage>{form.formState.errors.username?.message}</FormMessage>
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
            This is the repository that tou want to display.
          </FormDescription>
          <FormMessage>{form.formState.errors.repository?.message}</FormMessage>
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
        <Button>Submit</Button>
      </form>
    </Form>
  );
}
