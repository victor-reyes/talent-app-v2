import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  repository: z.string().min(1, { message: "Repository is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  performance: z.string().min(1, { message: "Performance is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});
