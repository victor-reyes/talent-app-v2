import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
 children: ReactNode
}

export function DeveloperCard({children}: Props) {
  return (
    <section className="flex justify-center items-center w-full">
      <Card className="w-screen">
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </section>
  );
}
