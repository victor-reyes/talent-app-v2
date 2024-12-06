import { db } from "@/db";
import { createProjectService } from "./service";

export const projectService = createProjectService(db);
