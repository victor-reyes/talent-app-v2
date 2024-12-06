import { z } from "zod";

const frontendScore = z.number().min(0).max(100);
const backendScore = z.number().min(0).max(100);
const teamCollaborationScore = z.number().min(0).max(100);
const individualCommunicationScore = z.number().min(0).max(100);
const designScore = z.number().min(0).max(100);
const managementScore = z.number().min(0).max(100);
