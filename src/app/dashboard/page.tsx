import { H1 } from "@/components/ui/header/header-h1";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserTable } from "./user-table";
import { DEVELOPERS } from "./data";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col justify-center px-4 gap-4">
      <H1>Dashboard</H1>
      <Tabs defaultValue="developers" className="flex flex-col">
        <TabsList className="space-x-3 w-fit mx-auto">
          <TabsTrigger value="developers">Developers</TabsTrigger>
          <TabsTrigger value="core">Core</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="developers">
          <UserTable data={DEVELOPERS} />
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
