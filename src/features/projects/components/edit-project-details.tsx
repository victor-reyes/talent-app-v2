"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import { Pencil } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Project, RepositoryInformation } from "../types";
import { projectService } from "../instance";

type Props = {
  project: Project;
};

const formSchema = z.object({
  repository: z.string(),
  description: z.string(),
});

export default function EditProjectDetails({ project }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  function toggleEdit() {
    // toggle of and toggle on
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <div className="flex justify-between items-baseline">
            <div className="flex flex-col ">
              <div className="ml-2  opacity-80 hover:opacity-100">
                <FormField
                  control={form.control}
                  name="repository"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Repository</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={project.repository}
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <FaGithub size={16} color="gray" />
                  Last commit {"Today"}
                </p>
              </div>
            </div>
            <button onClick={toggleEdit}>
              <Pencil className="mr-4 " size={16} />
            </button>
          </div>
          <section className="flex justify-between items-start mt-2 gap-2">
            <Image
              src="/restaurant1.png"
              width={250}
              height={240}
              alt=""
              className="m-2 object-cover rounded-lg"
            />
            <div className="flex flex-col items-center justify-between gap-4 mt-2 mr-2">
              <article className="flex flex-col items-center my-2">
                <p className="text-gray-400 text-sm">Commits</p>
                <p className="font-semibold">{project.commits}</p>
              </article>
              <Separator orientation="horizontal" />
              <article className="flex flex-col items-center my-2">
                <p className="text-gray-400 text-sm">Issues</p>
                <p className="font-semibold">{project.issues}</p>
              </article>
              <Separator orientation="horizontal" />
              <article className="flex flex-col items-center my-2">
                <p className="text-gray-400 text-sm">Performance</p>
                <p className="font-semibold">56%</p>
              </article>
            </div>
          </section>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={project.description}
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}
