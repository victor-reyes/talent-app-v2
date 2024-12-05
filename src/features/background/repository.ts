import { db } from "@/db";
import { eq } from "drizzle-orm";
import { backgroundsTable, BackgroundInsert, BackgroundSelect } from "./schema";

type Link = {
  name: "Github" | "LinkedIn";
  url: string;
};

export type MockBackground = {
  id: number;
  name: string;
  title: string;
  bio: string;
  avatarURL: string;
  languages?: string[] | undefined;
  educations?: string[] | undefined;
  skills?: string[];
  links?: Link[] | undefined;
};

const mockBackgrounds: MockBackground[] = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    bio: "I'm a software engineer with 5 years of experience",
    avatarURL: "https://avatars.githubusercontent.com/u/1?v=4",
    languages: ["JavaScript", "TypeScript", "Python"],
    educations: ["BSc in Computer Science"],
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    links: [
      {
        name: "Github" as "Github" | "LinkedIn",
        url: "https://github.com/johndoe",
      },
      {
        name: "LinkedIn" as "Github" | "LinkedIn",
        url: "https://linkedin.com/johndoe",
      },
    ],
  },
];

export function createRepository() {
  return {
    async getAll() {
      return mockBackgrounds;
    },
    async getById(id: number) {
      return await db.select().from(backgroundsTable).where(eq(backgroundsTable.id, id));
    },
    async add(background: BackgroundInsert) {
      return db.insert(backgroundsTable).values({ ...background });
    },
    async update(background: BackgroundSelect) {
const { id, ...rest } = background;
      return db
        .update(backgroundsTable)
        .set({ ...rest })
        .where(eq(backgroundsTable.id, id));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
