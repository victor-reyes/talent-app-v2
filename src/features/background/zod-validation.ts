import { z } from "zod";

const nameSchema = z.string().min(2);
const emailSchema = z.string().email();
const bioSchema = z.string().min(10).max(300);
const roleSchema = z.string().min(2).max(50);