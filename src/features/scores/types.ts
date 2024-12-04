export type DeveloperScore = {
    frontend: number;
    backend: number;
    individualCommunication: number;
    teamCollaboration: number;
    design: number;
    management: number;
    programmingScore: number;
    planningScore: number;
    communicationScore: number;
    averageScore: number;
}

export type Developer = DeveloperScore & {
    id: number;
}