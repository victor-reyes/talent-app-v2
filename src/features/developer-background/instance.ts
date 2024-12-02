import { createRepository } from "./repository";
import { createService } from "./service";

export const developerInstance = createService(createRepository());
