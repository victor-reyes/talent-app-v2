import { createRepository } from "./repository";
import { createService } from "./service";

export const developerInstace = createService(createRepository());
