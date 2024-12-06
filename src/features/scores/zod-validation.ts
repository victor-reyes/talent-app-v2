import { z } from "zod";

export const DeveloperScoreSchema = z.object({
    frontend: z.number().min(0).max(100),
    backend: z.number().min(0).max(100),
    teamCollaboration: z.number().min(0).max(100),
    individualCommunication: z.number().min(0).max(100),
    design: z.number().min(0).max(100),
    management: z.number().min(0).max(100),
});
