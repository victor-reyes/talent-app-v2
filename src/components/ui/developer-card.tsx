import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
 children: ReactNode
}

export function DeveloperCard({children}: Props) {
  return (
      <Card>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
