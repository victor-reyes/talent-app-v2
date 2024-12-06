"use client";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {} from "@/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { updateScoresAction } from "../../actions";
import { DeveloperScore } from "../../types";
import { useState } from "react";

type Props = {
  developerScore: DeveloperScore;
};
export function EditScoreForm({ developerScore }: Props) {
  const [frontendValue, setFrontendValue] = useState(developerScore.frontend);
  const [backendValue, setBackendValue] = useState(developerScore.backend);
  const [teamCollaborationValue, setTeamCollaborationValue] = useState(
    developerScore.teamCollaboration
  );
  const [designValue, setDesignValue] = useState(developerScore.design);
  const [individualComunicationValue, setIndividualComunicationValue] =
    useState(developerScore.individualCommunication);
  const [managementValue, setManagementValue] = useState(
    developerScore.management
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil type="submit" size={16} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit scores</DialogTitle>
          <DialogDescription>
            Make changes to the developers scores here. Click save when you´re
            done.
          </DialogDescription>
        </DialogHeader>
        <form action={updateScoresAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="individualCommunication" className="text-right">
                Individual Communication
              </label>
              <input
                value={individualComunicationValue}
                onChange={(e) =>
                  setIndividualComunicationValue(Number(e.target.value))
                }
                name="individualCommunication"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="teamCollaboration" className="text-right">
                Team Collaboration
              </label>
              <input
                value={teamCollaborationValue}
                onChange={(e) =>
                  setTeamCollaborationValue(Number(e.target.value))
                }
                name="teamCollaboration"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="management" className="text-right">
                Management
              </label>
              <input
                value={managementValue}
                onChange={(e) => setManagementValue(Number(e.target.value))}
                name="management"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="design" className="text-right">
                Design
              </label>
              <input
                value={designValue}
                onChange={(e) => setDesignValue(Number(e.target.value))}
                name="design"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="backend" className="text-right">
                Backend
              </label>
              <input
                value={backendValue}
                onChange={(e) => setBackendValue(Number(e.target.value))}
                name="backend"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="frontend" className="text-right">
                Frontend
              </label>
              <input
                value={frontendValue}
                onChange={(e) => setFrontendValue(Number(e.target.value))}
                name="frontend"
                className="col-span-3"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
