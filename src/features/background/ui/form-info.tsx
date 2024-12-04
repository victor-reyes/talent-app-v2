import { addDeveloperAction } from "../actions";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

{
  /* <Pencil type="submit" />
    <Form action={addDeveloperAction}>
      <input type="text" name="name" />
      <input type="text" name="title" />
      <input type="text" name="bio" />
    </Form> */
}

export function EditInfoForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil type="submit" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Title
            </label>
            <input id="title" defaultValue="@peduarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="bio" className="text-right">
              Bio
            </label>
            <input id="bio" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" formAction={addDeveloperAction}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
