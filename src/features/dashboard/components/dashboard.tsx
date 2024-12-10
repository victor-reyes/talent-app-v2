import { H1 } from "@/components/ui/header/header-h1";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserTable } from "@/features/dashboard/components/user-table";
import { DEVELOPERS } from "@/features/dashboard/components/data";

export function Dashboard() {
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
          <div className="flex gap-1 justify-between pt-4">
            <Input
              type="search"
              placeholder="Filter"
              className="w-fit rounded-xl"
            />
            <Button className="rounded-2xl">Create Salty</Button>
          </div>
          <UserTable data={DEVELOPERS} />
        </TabsContent>
        <TabsContent value="core">List with core team.</TabsContent>
        <TabsContent value="customers">List with customers</TabsContent>
      </Tabs>
    </div>
  );
}
