import { db } from "@/db";
import { createService } from "./service";

export const projectService = createService(db);
