import { createService } from "./service";

const user = {
    id: 1,
    frontend: Math.floor((Math.random() * 101)),
    backend: Math.floor((Math.random() * 101)),
    individualCommunication: Math.floor((Math.random() * 101)),
    teamCollaboration: Math.floor((Math.random() * 101)),
    design: Math.floor((Math.random() * 101)),
    management: Math.floor((Math.random() * 101))
  }

export const scoresService = createService(user);
