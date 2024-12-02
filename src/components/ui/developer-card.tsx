import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
 children: ReactNode
}

export function DeveloperCard({children}: Props) {
  return (
    <section className="flex justify-center items-center">
      <Card className="p-4">
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </section>
  );
}
