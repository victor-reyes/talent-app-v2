import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1>Dashboard</h1>
      <Tabs defaultValue="developers" className="w-[400px] flex flex-col">
        <TabsList className="space-x-3 w-fit mx-auto">
          <TabsTrigger value="developers">Developers</TabsTrigger>
          <TabsTrigger value="core">Core</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="developers">List with developers.</TabsContent>
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
