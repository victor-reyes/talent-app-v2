export type DeveloperScore = {
    id: number;
    frontend: number;
    backend: number;
    individualCommunication: number;
    teamCollaboration: number;
    design: number;
    management: number;
}

export type CompleteDeveloperScore = DeveloperScore & {
    programmingScore: number;
    planningScore: number;
    communicationScore: number;
    averageScore: number;
}



// export type Developer = DeveloperScore & {
//     id: number;
// }