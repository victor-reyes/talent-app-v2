import { createRepository } from "./repository";
import { createService } from "./service";

export const backgroundsService = createService(createRepository());
