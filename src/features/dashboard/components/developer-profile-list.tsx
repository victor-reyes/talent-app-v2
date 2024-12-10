import { Card } from "@/components";
import React from "react";
type DeveloperProfileListProps = {
  name: string;
  email: string;
};

export function DeveloperProfileList({
  name,
  email,
}: DeveloperProfileListProps) {
  return (
    <div>
      <Card>
        <div>
          <ul>
            <li>
              <h2>Developer Profile</h2>
            </li>
            <li className="bg-slate-300 p-5">
              <h3>{name}</h3>
              <h5>{email}</h5>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
