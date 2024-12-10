import { faker } from "@faker-js/faker";
import { developersStatus, roles } from "./schema";
import { createService } from "./service";
import { createRepository } from "./repository";
import { db } from "@/db";

const service = createService(createRepository(db));
export async function seedIdentities() {
  Array.from({ length: 10 }, (_, index) => {
    return {
      clerkId: index,
      role: faker.helpers.arrayElement(roles.enumValues),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      status: faker.helpers.arrayElement(developersStatus.enumValues),
    };
  }).forEach(async (developer) => {
    const id = ((await service.addIdentity(developer))[0] as { id: number }).id;
    await service.addDeveloperProfile({
      userId: id,
      name: developer.name,
      email: developer.email,
      status: developer.status,
    });
  });
}
