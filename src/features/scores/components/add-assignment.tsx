"use client";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Scores } from "../types";
import { updateScoresAction } from "../actions";

type Props = {
  scores: Scores;
};

export function AddAssignment({ scores: scores }: Props) {
/*   const [frontendValue, setFrontendValue] = useState(scores.frontend);
  const [title, setTitle] = useState("title");

  const [backendValue, setBackendValue] = useState(scores.backend);
  const [teamCollaborationValue, setTeamCollaborationValue] = useState(
    scores.teamCollaboration
  );
  const [designValue, setDesignValue] = useState(scores.design);
  const [individualComunicationValue, setIndividualComunicationValue] =
    useState(scores.individualCommunication);
  const [managementValue, setManagementValue] = useState(scores.management); */

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil type="submit" size={16} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new assignment</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form action={updateScoresAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="title" className="text-right">
                Title
              </label>
              <input type="text" name="title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="score" className="text-right">
                Score
              </label>
              <input
                type="number"
                min="0"
                max="100"
                name="teamCollaboration"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="comment" className="text-right">
                Comments
              </label>
              <textarea name="comment" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="Tags" className="text-right">
                Tags
              </label>
              <input name="Tags" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4"></div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
