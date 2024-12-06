import { db } from "@/db";
import { createService } from "./service";

export const scoresService = createService(db);
