import { H1 } from "@/components/ui/header/header-h1";
import { H2 } from "@/components/ui/header/header-h2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const developers: User[] = [
  { name: "John", course: "JavaScript" },
  { name: "Jane", course: "Java" },
  { name: "Doe", course: "C#" },
  { name: "Peter", course: "JavaScript" },
  { name: "Mary", course: "Java" },
  { name: "Paul", course: "C#" },
];
export default function Page() {
  return (
    <div className="container mx-auto flex flex-col justify-center px-4 py-2">
      <H1>Dashboard</H1>
      <Tabs defaultValue="developers" className="w-[400px] flex flex-col">
        <TabsList className="space-x-3 w-fit mx-auto">
          <TabsTrigger value="developers">Developers</TabsTrigger>
          <TabsTrigger value="core">Core</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="developers">
          <List users={developers} />
        </TabsContent>
        <TabsContent value="core">List with core team.</TabsContent>
        <TabsContent value="customers">List with customers</TabsContent>
      </Tabs>
    </div>
  );
}

type User = { name: string; course: "JavaScript" | "Java" | "C#" };
type Props = { users: User[] };
export function List({ users }: Props) {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name} - {user.course}
          </li>
        ))}
      </ul>
    </>
  );
}
