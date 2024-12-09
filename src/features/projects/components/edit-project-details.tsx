"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { X } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  Separator,
  FormDescription,
  Button,
} from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Project } from "../types";

type Props = {
  project: Project;
  setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export default function EditProjectDetails({ project, setShowDetails }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: project.title,
      description: project.description,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await updateAction({
        description: values.description,
        title: values.title,
      });
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  function toggleEdit() {
    setShowDetails(true);
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
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input type="text" {...form.register("title")} />
                  </FormControl>
                  <FormDescription>
                    This is your Github repository title.
                  </FormDescription>
                  <FormMessage>
                    {form.formState.errors.title?.message}
                  </FormMessage>
                </FormItem>
                <p className="text-xs text-gray-400 flex items-center gap-2">
                  <FaGithub size={16} color="gray" />
                  Last commit {"Today"}
                </p>
              </div>
            </div>
            <button onClick={toggleEdit}>
              <X className="mr-4 " size={16} />
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
          <Button>Save</Button>
        </form>
      </Form>
    </>
  );
}
