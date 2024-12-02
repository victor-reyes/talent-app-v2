import { db } from "./db/mockdb";
import { createProjectService } from "./service";

export const projectService = createProjectService(db);
