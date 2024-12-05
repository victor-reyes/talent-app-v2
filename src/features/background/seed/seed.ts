import { faker } from "@faker-js/faker";
import { createRepository } from "../repository";
import { BackgroundInsert } from "../schema";
import { skills } from "./data";

const repository = createRepository();

function seed(count: number = 50) {
  const backgrounds: BackgroundInsert[] = Array.from({ length: count }, () => {
    return {
      name: faker.person.fullName(),
      title: faker.person.jobType(),
      bio: faker.person.bio(),
      avatarUrl: faker.image.urlLoremFlickr({
        category: "avatar",
        width: 100,
        height: 100,
      }),
      languages: faker.helpers.arrayElements(
        ["English", "Swedish", "Spanish", "French", "German"],
        3,
      ),
      educations: faker.helpers.arrayElements(
        [
          "B.Sc. in Computer Science",
          "M.Sc. in Artificial Intelligence",
          "Ph.D. in Software Engineering",
          "Diploma in Data Science",
          "Certificate in UX Design",
        ],
        2,
      ),
      skills: faker.helpers.arrayElements(skills, 10),
      links: faker.helpers
        .arrayElements([
          { url: "https://github.com/alimohseni99", name: "Github" },
          {
            url: "https://www.linkedin.com/in/ali-mohseni-se",
            name: "LinkedIn",
          },
          { url: "https://www.alimohseni.se/", name: "Portfolio" },
        ])
        .sort((a, b) => a.name.localeCompare(b.name)),
    };
  });
  backgrounds.forEach((background) => {
    repository.add(background);
  });
}

seed();
