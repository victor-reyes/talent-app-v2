import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
 children: ReactNode
}

export function DeveloperCard({children}: Props) {
  return (
      <Card className="w-screen">
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
